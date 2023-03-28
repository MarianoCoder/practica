import http from "http";

import app from "./app.js";
import { init } from "./socket.js";

const server = http.createServer(app);
const PORT = process.env.NODE_PORT || 3000;

init(server);

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}/`);
});
