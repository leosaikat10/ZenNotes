import React from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import EditorPanel from './components/EditorPanel';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <MainContent  notes={notes}
        setSelectedNote={setSelectedNote}/>
      <EditorPanel selectedNote={selectedNote}/>
    </div>
  );
}

export default App;