import React, { useContext, useState, useEffect, useRef } from 'react'
import noteContext from '../context/notes/noteContext';
import AddNote from './AddNote';
import Noteitem from './Noteitem';

export const Notes = () => {
    const context = useContext(noteContext)
    const { notes, getNotes } = context;
    useEffect(() => {
        getNotes()

    }, [])

    const [note, setNote] = useState({ etitle: "", edescription: "", etag: "default" })

    const handleClick = (e) => {
        e.preventDefault()
        console.log("Update notes", note)
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({ etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag });
    }

    const ref = useRef(null)
    return (
        <>

            <AddNote />

            <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop" ref={ref}>
                Launch static backdrop modal
            </button>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className='container my-3'>
                                <div className="mb-3">
                                    <label htmlFor="etitle" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" name="etitle" onChange={onChange} value={note.etitle} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edescription" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="edescription" name='edescription' onChange={onChange} value={note.edescription} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="etag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="etag" name='etag' onChange={onChange} value={note.etag} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleClick}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container my-3 row'>
                <h2>Your Notes</h2>
                {notes.map((note) => {
                    return <Noteitem key={note._id} updateNote={updateNote} note={note} />
                })
                }
            </div>
        </>
    )
}
