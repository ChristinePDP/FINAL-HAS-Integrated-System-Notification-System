import jwt from 'jsonwebtoken';

// Auth middleware: verify JWT and attach decoded payload to `req.user`.
export const authMiddleware = (req, res, next) => {
  try {
    // Code will be added here step-by-step
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        success: false,
        message: 'Authorization header is missing. Adapter Layer must forward a valid JWT token.',
        code: 'MISSING_AUTH_HEADER',
      });
    }

    const parts = authHeader.split(' ');
    if (parts.length !== 2 || parts[0] !== 'Bearer') {
      return res.status(401).json({
        success: false,
        message: 'Invalid authorization header format. Expected: Authorization: Bearer <token>',
        code: 'INVALID_AUTH_FORMAT',
      });
    }

    const token = parts[1];

  } catch (error) {
    // Error handling will be added later
  }
};

export default authMiddleware;