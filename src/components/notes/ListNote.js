import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteNote } from '../../redux/slices/notesSlice';

function ListNote() {

  const notes=useSelector(state=>state.notesReducer.notes);

  const despatch=useDispatch();
  
  return (
    <div>
      {
        notes.map((note)=>{
              return <div>
                <p>{note.id}</p>
                <h2>{note.title}</h2>
                <p>{note.desc}</p>
                <button onClick={()=>despatch(deleteNote(note.id))}>Delete</button>
              </div>
        })
      }
    </div>
  )
}

export default ListNote