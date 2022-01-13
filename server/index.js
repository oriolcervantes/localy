const express = require("express");
const app = express();
const PORT = 3001;
const cors = require("cors");
const router = require("./router");
const db = require("./models/index");

// app.use(cors());
// app.use(express.json());
// app.use(router);

(async () => {
  await db.sequelize.sync();
  app.listen(PORT, () => {
    console.log(`Server up and running on http://localhost:${PORT}`)
  })
})();