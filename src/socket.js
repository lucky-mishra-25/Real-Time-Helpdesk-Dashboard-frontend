import { io } from "socket.io-client";

const socket = io(
  "https://real-time-helpdesk-dashboard-backend.onrender.com",
  {
    transports: ["websocket", "polling"]
  }
);

export default socket;