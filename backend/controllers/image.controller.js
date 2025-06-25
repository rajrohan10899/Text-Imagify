import FormData from "form-data";
import { userModel } from "../models/user.model.js";
import axios from "axios";

export const generateImage = async (req, res) => {
  try {
    // console.log("📥 Body received:", req.body);
    // console.log("🧑‍💻 User ID from middleware:", req.userId);
    const { prompt } = req.body;
    const userId = req.userId;

    // 🔧 FIXED: find → findById
    const user = await userModel.findById(userId);
    console.log("👤 User fetched:", user);

    if (!user || !prompt) {
      return res.json({ success: false, message: "Missing details" });
    }

    if (user.creditBalance === 0 || userModel.creditBalance < 0) {
      return res.json({
        success: false,
        message: "No Credit Balance",
        creditBalance: user.creditBalance,
      });
    }

    const formData = new FormData();
    formData.append("prompt", prompt);

    const { data } = await axios.post(
      "https://clipdrop-api.co/text-to-image/v1",
      formData,
      {
        headers: {
          "x-api-key": process.env.CLIP_DROP_API_KEY,
        },
        responseType: "arraybuffer",
      }
    );

    const base64Image = Buffer.from(data, "binary").toString("base64");
    const resultImage = `data:image/png;base64, ${base64Image}`;

    await userModel.findByIdAndUpdate(user._id, {
      creditBalance: user.creditBalance - 1,
    });

    res.json({
      success: true,
      message: "Image Generated",
      creditBalance: user.creditBalance - 1,
      resultImage,
    });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};
