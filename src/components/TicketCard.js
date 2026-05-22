import React from "react";

const TicketCard = ({
  ticket,
  currentUser,
  locks,
  onLock,
  onUnlock
}) => {
  const lockInfo = locks[ticket.id];

  const isLocked = !!lockInfo;

  const isLockedByCurrentUser =
    lockInfo?.userId === currentUser;

  return (
    <div className="ticket-card">
      <h3>{ticket.title}</h3>

      <p>
        <strong>ID:</strong> {ticket.id}
      </p>

      <p>
        <strong>Status:</strong> {ticket.status}
      </p>

      {isLocked ? (
        <div>
          <p className="locked">
            Locked by: {lockInfo.userId}
          </p>

          {isLockedByCurrentUser && (
            <button
              className="unlock-btn"
              onClick={() => onUnlock(ticket.id)}
            >
              Unlock Ticket
            </button>
          )}
        </div>
      ) : (
        <button
          className="lock-btn"
          onClick={() => onLock(ticket.id)}
        >
          Lock Ticket
        </button>
      )}
    </div>
  );
};

export default TicketCard;