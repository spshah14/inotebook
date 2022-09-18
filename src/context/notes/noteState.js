import React, { useState } from 'react'
import NoteContext from './noteContext'

const NoteState = (props) => {


    const initialNotes = [
        {
            "_id": "6325ccb36ecb9dd7fb7ff878",
            "user": "632566a816b8504e132b8004",
            "title": "New note",
            "description": "Please access the playlist",
            "tag": "YouTube",
            "date": "2022-09-17T13:33:39.467Z",
            "__v": 0
        },
        {
            "_id": "6326se8724b617a4437746422",
            "user": "632566a816b8504e132b8004",
            "title": "My title",
            "description": "This is my title",
            "tag": "General",
            "date": "2022-09-18T09:44:18.251Z",
            "__v": 0
        },
        {
            "_id": "6325ccb36decb9dd7fb7ff878",
            "user": "632566a816b8504e132b8004",
            "title": "New note",
            "description": "Please access the playlist",
            "tag": "YouTube",
            "date": "2022-09-17T13:33:39.467Z",
            "__v": 0
        },
        {
            "_id": "6326e8724bf617a4437746422",
            "user": "632566a816b8504e132b8004",
            "title": "My title",
            "description": "This is my title",
            "tag": "General",
            "date": "2022-09-18T09:44:18.251Z",
            "__v": 0
        },
        {
            "_id": "6325ccb36ecb9wdd7fb7ff878",
            "user": "632566a816b8504e132b8004",
            "title": "New note",
            "description": "Please access the playlist",
            "tag": "YouTube",
            "date": "2022-09-17T13:33:39.467Z",
            "__v": 0
        },
        {
            "_id": "6326e8724b617a4t437746422",
            "user": "632566a816b8504e132b8004",
            "title": "My title",
            "description": "This is my title",
            "tag": "General",
            "date": "2022-09-18T09:44:18.251Z",
            "__v": 0
        }
    ]

    const [notes, setNotes] = useState(initialNotes)

    // Add a Note
    const addNote = (title, description, tag) => {
        // TODO: API call
        console.log("Adding a new note");
        const note = {
            "_id": "6326e8724b617a4t437746422",
            "user": "632566a816b8504575e132b8004",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2022-09-18T09:44:18.251Z",
            "__v": 0
        };
        setNotes(notes.concat(note))
    }

    // Delete a Note
    const deleteNote = () => {

    }
    // Edit a Note
    const editNote = () => {

    }


    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;