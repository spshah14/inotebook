import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';

const Noteitem = (props) => {

    const context = useContext(noteContext)
    const { deleteNote } = context;
    const { note } = props;


    return (
        <div className='col-md-3'>
            <div className="card my-3">
                <div className="card-body">


                    <div className="d-flex">
                        <div className="p-2 flex-grow-1"><h5 className="card-title">{note.title}</h5></div>
                        <div className="p-2"><i className="fa-regular fa-pen-to-square mx-1"></i></div>
                        <div className="p-2"><i className="fa-solid fa-trash mx-1" onClick={() => { deleteNote(note._id) }}></i></div>
                    </div>
                    <p className="card-text">{note.description}</p>

                </div>
            </div>
        </div>
    )
}

export default Noteitem