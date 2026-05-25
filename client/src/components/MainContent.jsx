import React from 'react';

function MainContent() {
  return (
    <div className="main-content">
      <div className="top-section">
        <h1>My Notes</h1>

      </div>
      <div className="notes-grid"> 
        {notes.map(note => (
          <NoteCard 
            key={note.id} 
            note={note} 
            setSelectedNote={setSelectedNote} 
          />
        ))}
      </div>

    </div>
  );
}

export default MainContent;