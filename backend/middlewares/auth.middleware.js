import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  const { token } = req.headers;

  if (!token) {
    return res.json({ success: false, message: "Not Authorized. Login Again" });
  }

  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (tokenDecode.id) {
      req.userId = tokenDecode.id; // ✅ Don't touch req.body
      next();
    } else {
      return res.json({
        success: false,
        message: "Not Authorized. Login Again",
      });
    }
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};
export default userAuth;
