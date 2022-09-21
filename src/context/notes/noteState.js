import React, { useState } from 'react'
import NoteContext from './noteContext'

const NoteState = (props) => {

    const host = "http://localhost:5000"

    const initialNotes = []

    const [notes, setNotes] = useState(initialNotes)


    // Get all notes
    const getNotes = async () => {

        // API call

        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMyNTY2YTgxNmI4NTA0ZTEzMmI4MDA0In0sImlhdCI6MTY2MzQwNTI0Mn0.q8UZRJOIMDkgELwizpypinT_0DNcqbbuAHiPdxH1-Xk'
            },
        });

        const json = await response.json();
        console.log(json);
        setNotes(json);
    }

    // Add a Note
    const addNote = async (title, description, tag) => {
        // TODO: API call

        // API call

        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMyNTY2YTgxNmI4NTA0ZTEzMmI4MDA0In0sImlhdCI6MTY2MzQwNTI0Mn0.q8UZRJOIMDkgELwizpypinT_0DNcqbbuAHiPdxH1-Xk'
            },
            body: JSON.stringify({ title, description, tag }) // body data type must match "Content-Type" header
        });
        const json = response.json(); // parses JSON response into native JavaScript objects
        console.log(json);


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
    const deleteNote = async (id) => {
        // API call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMyNTY2YTgxNmI4NTA0ZTEzMmI4MDA0In0sImlhdCI6MTY2MzQwNTI0Mn0.q8UZRJOIMDkgELwizpypinT_0DNcqbbuAHiPdxH1-Xk'
            },

        });
        const json = response.json(); // parses JSON response into native JavaScript objects
        console.log(json);

        console.log("Delete note: " + id);
        const newNotes = notes.filter((note) => note._id !== id);
        setNotes(newNotes);
    }
    // Edit a Note
    const editNote = async (id, title, description, tag) => {

        // API call

        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMyNTY2YTgxNmI4NTA0ZTEzMmI4MDA0In0sImlhdCI6MTY2MzQwNTI0Mn0.q8UZRJOIMDkgELwizpypinT_0DNcqbbuAHiPdxH1-Xk'
            },
            body: JSON.stringify({ title, description, tag }) // body data type must match "Content-Type" header
        });
        const json = response.json(); // parses JSON response into native JavaScript objects
        console.log(json);

        let newNotes = JSON.parse(JSON.stringify(notes));
        // Logic to edit in client
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }
        }
        setNotes(newNotes);
    }



    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;