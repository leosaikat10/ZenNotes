import React from "react";

function NoteCard({ note, setSelectedNote }) {
  return (
    <div
      className="note-card"
      onClick={() => setSelectedNote(note)}
    >
      <h3>{note.title}</h3>

      <p>{note.body}</p>

      <span className="tag">
        #{note.tag}
      </span>
    </div>
  );
}

export default NoteCard;