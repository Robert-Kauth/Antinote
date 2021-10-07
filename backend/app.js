const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const csurf = require("csurf");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const { environment } = require("./config");

const routes = require("./routes");

const isProduction = environment === "production";

const app = express();

// Middleware
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());

// Security Middleware
if (isProduction) {
  app.use(cors());
}

app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

app.use(
  csurf({
    cookie: {
      secure: isProduction,
      sameSite: isProduction && "Lax",
      httpOnly: true,
    },
  })
);

// Routers
app.use(routes);

module.exports = app;
