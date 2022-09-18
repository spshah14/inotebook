import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';
import Noteitem from './Noteitem';

export const Notes = () => {
    const context = useContext(noteContext)
    const { notes, setNotes } = context;
    return (
        <div className='container my-3 row'>
            <h2>Your Notes</h2>
            {notes.map((note) => {
                return <Noteitem note={note} />
            })
            }
        </div>
    )
}
