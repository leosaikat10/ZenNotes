import React, { useState, useEffect } from 'react';

function EditorPanel({ selectedNote , notes, setNotes, setSelectedNote}) {
  const [editedTitle, setEditedTitle] = useState("");
  const [editedBody, setEditedBody] = useState("");

  useEffect(() => {
    if (selectedNote) {
      setEditedTitle(selectedNote.title);
      setEditedBody(selectedNote.body);
    }
  }, [selectedNote]);
  
  // Save the edited note
  const handleSave = () => {

    const updatedNote = notes.map((note) => {
      if (note.id === selectedNote.id) {

        return {
           ...note,
           title: editedTitle, 
           body: editedBody };
      }
      return note;
    });
    setNotes(updatedNote);
  };
  // Delete the note
  const handleDelete = () => {
    const filteredNotes = notes.filter((note) => note.id !== selectedNote.id);

    setNotes(filteredNotes);

    setSelectedNote(null);
  }

  if (!selectedNote) {
    return (
      <div className="editor-panel">
        <h2>Select A Note</h2>
      </div>
    );
  }

  return (
    <div className="editor-panel">

      <input 
      type = "text" 
      value = {editedTitle}
      onChange = {(e) => setEditedTitle(e.target.value)}
      ></input>

      <textarea
      value = {editedBody}
      onChange = {(e) => setEditedBody(e.target.value)}
      ></textarea>

      <div className="editor-buttons">

        <button onClick={handleSave}>Save</button>

        <button onClick={handleDelete}>Delete</button>

      </div>
     </div>
  );
}

export default EditorPanel;