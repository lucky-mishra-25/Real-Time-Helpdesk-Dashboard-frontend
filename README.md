# SyncDesk Frontend

Real-time collaborative helpdesk frontend built using React.js and Socket.io Client.

## Features

- Real-time ticket updates
- Live ticket locking system
- Multi-user synchronization
- Dynamic dashboard
- Socket.io integration
- Responsive UI
- Instant lock/unlock updates

---

# Tech Stack

- React.js
- Socket.io Client
- Axios
- CSS

---

# Folder Structure

```bash
frontend/
│
├── public/
├── src/
│   ├── api/
│   ├── components/
│   ├── styles/
│   ├── socket.js
│   ├── App.js
│   └── index.js
│
└── package.json
```

---

# Installation

## Move To Frontend Folder

```bash
cd frontend
```

---

## Install Dependencies

```bash
npm install
```

---

# Start Frontend

```bash
npm start
```

Frontend runs on:

```bash
http://localhost:3000
```

---

# Real-Time Workflow

## User Joins Dashboard

```javascript
socket.emit("join_dashboard", {
  userId: currentUser
});
```

---

## Lock Ticket

```javascript
socket.emit("lock_ticket", {
  ticketId,
  userId: currentUser
});
```

---

## Unlock Ticket

```javascript
socket.emit("unlock_ticket", {
  ticketId
});
```

---

# Live Events

## ticket_locked

Updates all connected clients instantly.

---

## ticket_unlocked

Removes lock globally in real-time.

---

## current_locks

Syncs all existing locks when user joins.

---

# Real-Time Collaboration

- Multiple users supported
- Live synchronization
- Real-time UI updates
- Collaborative ticket management
- Lock ownership validation

---

# UI Features

- Ticket dashboard
- Lock status indicators
- Real-time updates
- Responsive ticket grid
- User-specific controls

---

# Production Features

- Component-based architecture
- API abstraction layer
- Socket cleanup
- State management using React Hooks
- Error handling
- Scalable structure

---

# Future Improvements

- Tailwind CSS
- Framer Motion animations
- Redux/Zustand
- React Query
- TypeScript
- Dark mode
- Activity timeline
- Analytics dashboard

---

# Author

Lucky Mishra
