import axios from "axios";

const API = axios.create({
  baseURL:
    "https://syncdesk-backend.onrender.com/api"
});

export const getTickets = async () => {
  const response = await API.get("/tickets");
  return response.data;
};

export const updateTicket = async (
  ticketId,
  payload
) => {
  const response = await API.put(
    `/tickets/${ticketId}`,
    payload
  );

  return response.data;
};