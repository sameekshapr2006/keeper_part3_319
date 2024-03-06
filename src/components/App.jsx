import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [note,SetNote] = useState([])
function AddNote(newNote) {
  // console.log(note);
SetNote(prevNote =>{
  return[...prevNote, newNote];
});
}

function deleteNote(id){
  // console.log("delete was triggered");
  SetNote(prevNote =>{
    return prevNote.filter((noteItem,index) =>{
      return index !== id;
    })
  });
}

  return (
    <div>
      <Header />
      <CreateArea
      onAdd={AddNote} 
       />
       {note.map((noteItem,index)=>{
        return <Note 
        key={index}
        id={index}
        title={noteItem.title} 
        content={noteItem.content} 
          onDelete={deleteNote}
        />
       }
       )}
      
      <Footer />
    </div>
  );
}

export default App;
