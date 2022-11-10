const checkSession = (req, res, next) => {
  // Podria obtener un header de autorización
  // y obtener un token o chequear si existe
  const headerAuth = req.headers.authorization || "";

  const token = headerAuth.split(" "); // Cualquier token

  if (!token) {
    res.status(405);
    res.send({ error: "Token missing" });
  } else {
    next();
  }
};

module.exports = { checkSession };
