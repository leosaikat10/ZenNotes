import React from "react";

function Sidebar() {
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

      <button className="new-note-btn">+ New Note</button>

    </div>
  );
}

export default Sidebar;