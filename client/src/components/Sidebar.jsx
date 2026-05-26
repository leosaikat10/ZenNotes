import React from "react";

function Sidebar({ notes, setNotes, setSelectedNote }) {

  const createNewNote = () => {
    const newNote = {
      id: Date.now(),
      title: "Untitled Note",
      body: "Start writing your note here...",
      tag: "persona",
    };
    setNotes([newNote, ...notes]);
    setSelectedNote(newNote);
  };

  return (
    <div className="sidebar">
      <h2 className ="logo">ZenNotes</h2>

      <div className="menu">
        <p>Dashboard</p>
        <p>All Notes</p>

        <div className="notebooks">
          <h4>Notebooks</h4>

          <ul>
            <li>Project Alpha</li>
            <li>Personal</li>
            <li>Work</li>
          </ul>
        </div>
      </div>

      <button className="new-note-btn"
      onClick={createNewNote}
      >+ New Note</button>

    </div>
  );
}

export default Sidebar;