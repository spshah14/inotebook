import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';
import AddNote from './AddNote';
import Noteitem from './Noteitem';

export const Notes = () => {
    const context = useContext(noteContext)
    const { notes, addNote } = context;
    return (
        <>
            <AddNote />
            <div className='container my-3 row'>
                <h2>Your Notes</h2>
                {notes.map((note) => {
                    return <Noteitem key={note._id} note={note} />
                })
                }
            </div>
        </>
    )
}
