import React ,{useState}from 'react';

import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import EditorPanel from './components/EditorPanel';

function App() {
  const [selectedNote, setSelectedNote] = useState(null);

const [notes, setNotes] = useState([]);
 

const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="app">
      <Sidebar
      notes={notes}
      setNotes={setNotes}
      setSelectedNote={setSelectedNote}
       />
      <MainContent  
      notes={notes}
      setSelectedNote={setSelectedNote}
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
        />
      <EditorPanel selectedNote={selectedNote}
      notes={notes}
      setNotes={setNotes}
      setSelectedNote={setSelectedNote}
      />
    </div>
  );
}

export default App;