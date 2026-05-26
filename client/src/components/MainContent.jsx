import React from "react";
import SearchBar from "./SearchBar";
import NoteCard from "./NoteCard";

function MainContent({ 
  notes, 
  setSelectedNote,
   searchTerm,
    setSearchTerm 
  }) {

  const filteredNotes = notes.filter((note) => {
    return (
      note.title.toLowerCase().includes(searchTerm.toLowerCase())
       ||
      note.body.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="main-content">

      <div className="top-section">

        <h1>My Notes</h1>

        <SearchBar 
        searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        
      </div>

      <div className="notes-grid">
        {filteredNotes.map((note) => (
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