import React ,{useState}from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import EditorPanel from './components/EditorPanel';

function App() {
  const [selectedNote, setSelectedNote] = useState(null);

  const notes = [
    {
      id: 1,
      title: "Meeting Notes",
      body: "Discuss React project structure...",
      tag: "work",
    },

    {
      id: 2,
      title: "Shopping List",
      body: "Milk, Bread, Coffee",
      tag: "personal",
    },

    {
      id: 3,
      title: "Startup Idea",
      body: "AI powered learning app",
      tag: "ideas",
    },
  ];

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