import {useEffect, useState} from 'react'
import Background from "./components/Background"
import NoteContainer from "./components/NoteContainer"
import Sidebar from "./components/Sidebar"


function App() {

  const [notes,  setNotes] = useState(
    JSON.parse(localStorage.getItem("Notes-app")) ||
    [
      {
        title:"To add Note",
        text: "Click on the Add button to add a new note.",
        date: Date.now() 
      },
      {
        title:"To delete Note",
        text: "Click on the delete button to delete a note.",
        date: Date.now() 
      },
      {
        title:"Max Length",
        text: "This note has a maximum character limit of 572, and a progress bar visually indicates its usage.",
        date: Date.now() 
      },
      {
        title:"To use Note",
        text: "Click on the title to add your note title, and move to the text area to enter any content. Repeat the same process as needed.",
        date: Date.now() 
      },
    ]);
  

  function addNote()
  {
    const tempNote = [...notes]
      tempNote.push({
        id:Date.now() + "" +  Math.floor(Math.random() * 100) , 
        title: "",
        text: "",
        date: Date.now() 
      })
      setNotes(tempNote);
  }

  function deleteNote(id)
  {
    const tempNote = [...notes];
    const index = tempNote.findIndex(item => item.id === id)
    if(index<0)
    {
      return 
    }
    tempNote.splice(index,1)
    setNotes(tempNote)
  }
  useEffect(()=>{
    localStorage.setItem("Notes-app",JSON.stringify(notes))
  },[notes])


  function updateTextArea(text,id)
  {
    const tempNote = [...notes];
    const index = tempNote.findIndex(item => item.id === id)
    if(index<0)
    {
      return 
    }
    tempNote[index].text= text;
    setNotes(tempNote)
  }

  function updateTextTitle(title,id)
  {
    const tempNote = [...notes];
    const index = tempNote.findIndex(item => item.id === id)

    if(index<0)
    {
      return 
    }
    tempNote[index].title = title;
    setNotes(tempNote)
  }

  return (
    <>
      <Background />
      <Sidebar addNote={addNote}/>
      <NoteContainer notes={notes} deleteNote={deleteNote} updateTextArea={updateTextArea} updateTextTitle={updateTextTitle} />
    </>
  )
}

export default App;
