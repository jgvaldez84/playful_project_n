import './App.css';
import { useState } from 'react';
import { v4 as uuid } from "uuid";
import Sidebar from './Sidebar';
import Main from './Main';



function App() {

  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "untitled note",
      body: "",
      lastModified: Date.now()
    };

    setNotes([newNote, ...notes]);
  };

  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete)
    )};

    const getActiveNote = () => {
      return notes.find((note) => note.id === activeNote);
    }

    const onUpdateNote = (updatedNote) => {
      const updatedNotesArray = notes.map((note)=> {
        if(note.id === activeNote){
          return updatedNote;
        }
        return note;
      });
    setNotes(updatedNotesArray)
    };

  return (
    <div className="App">
      <Sidebar 
      notes={notes}
       onAddNote={onAddNote} 
       onDeleteNote={onDeleteNote}
       activeNote ={activeNote}
       setActiveNote ={setActiveNote}
       />
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
      
    </div>
  );
}

export default App;
