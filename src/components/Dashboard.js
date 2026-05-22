import React, { useEffect, useState } from "react";

import socket from "../socket";
import { getTickets } from "../api/ticketApi";
import TicketCard from "./TicketCard";

const Dashboard = () => {
  const [tickets, setTickets] = useState([]);

  const [locks, setLocks] = useState({});

  /*
    Simulated logged-in user
  */
  const [currentUser] = useState(
    `agent-${Math.floor(Math.random() * 1000)}`
  );

  /*
    Fetch initial tickets
  */
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const data = await getTickets();

        setTickets(data.tickets);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTickets();
  }, []);

  /*
    Initialize socket events
  */
  useEffect(() => {
    socket.emit("join_dashboard", {
      userId: currentUser
    });

    /*
      Existing locks
    */
    socket.on("current_locks", (allLocks) => {
      const formatted = {};

      allLocks.forEach((lock) => {
        formatted[lock.ticketId] = lock;
      });

      setLocks(formatted);
    });

    /*
      Ticket locked event
    */
    socket.on("ticket_locked", (data) => {
      setLocks((prev) => ({
        ...prev,
        [data.ticketId]: data
      }));
    });

    /*
      Ticket unlocked event
    */
    socket.on("ticket_unlocked", (data) => {
      setLocks((prev) => {
        const updated = { ...prev };

        delete updated[data.ticketId];

        return updated;
      });
    });

    socket.on("lock_error", (error) => {
      alert(error.message);
    });

    socket.on("unlock_error", (error) => {
      alert(error.message);
    });

    return () => {
      socket.off("current_locks");
      socket.off("ticket_locked");
      socket.off("ticket_unlocked");
      socket.off("lock_error");
      socket.off("unlock_error");
    };
  }, [currentUser]);

  /*
    Lock ticket
  */
  const handleLock = (ticketId) => {
    socket.emit("lock_ticket", {
      ticketId,
      userId: currentUser
    });
  };

  /*
    Unlock ticket
  */
  const handleUnlock = (ticketId) => {
    socket.emit("unlock_ticket", {
      ticketId
    });
  };

  return (
    <div className="dashboard">
      <h1>Real-Time Helpdesk Dashboard</h1>

      <h2>Logged in as: {currentUser}</h2>

      <div className="ticket-grid">
        {tickets.map((ticket) => (
          <TicketCard
            key={ticket.id}
            ticket={ticket}
            currentUser={currentUser}
            locks={locks}
            onLock={handleLock}
            onUnlock={handleUnlock}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
