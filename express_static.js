// Setup basic express server
const express = require("express");
const app = express();
const path = require("path");
const server = require("http").createServer(app);

// Routing
app.use(express.static(path.join(__dirname, "dist")));

server.listen(6565, () => {
  console.log("Server listening at vCfg.port %d", vCfg.port);
});
