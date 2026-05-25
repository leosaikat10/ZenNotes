import React from 'react';

function EditorPanel({ selectedNote }) {
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
      value = {selectedNote.title}></input>
      <textarea
      value = {selectedNote.body}></textarea>

      <div className="editor-buttons">
        <button >Save</button>
        <button >Delete</button>
      </div>
     </div>
  );

}

export default EditorPanel;