import React from 'react';
import NoteCard from './NoteCard';
import SearchBar from './SearchBar';

function MainContent({ notes, setSelectedNote }) {
  return (
    <div className="main-content">
      <div className="top-section">
        <h1>My Notes</h1>
        <SearchBar />
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