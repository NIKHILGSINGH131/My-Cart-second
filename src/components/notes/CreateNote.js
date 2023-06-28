import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createNote } from '../../redux/slices/notesSlice';
import { nanoid } from '@reduxjs/toolkit';

function CreateNote() {

  const [title , setTitle]=useState('');
  const [desc , setDesc]=useState('');

  const despatch=useDispatch();

  function handleSubmit(e){
    e.preventDefault();
    despatch(createNote({
      title,
      desc,
      id: nanoid(10)
    }))
  }

  return (
    <div>
      <form  onSubmit={handleSubmit}>
        <input placeholder='title' type="text"  onChange={(e)=>setTitle(e.target.value)}/>
        <input placeholder='descreption' type="text" onChange={(e)=>setDesc(e.target.value)} />
        <input type="submit" onSubmit={handleSubmit}  />
      </form>
    </div>
  )
}

export default CreateNote