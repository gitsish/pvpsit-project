import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// Middleware for verifying JWT token
const verifyToken = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(403).json({ message: "Access Denied" });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid Token" });
  }
};

// Verify if user is faculty
export const verifyFaculty = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.role === "faculty") {
      next();
    } else {
      res.status(403).json({ message: "Faculty access only" });
    }
  });
};

// Verify if user is student
export const verifyStudent = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.role === "student") {
      next();
    } else {
      res.status(403).json({ message: "Student access only" });
    }
  });
};
