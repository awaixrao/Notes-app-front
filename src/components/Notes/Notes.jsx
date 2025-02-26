import React, { useContext } from 'react'
import NoteCard from '../NoteCard/NoteCard'
import { AuthContext } from '../../context/AuthContext'
const Notes = () => {
    const ctx = useContext(AuthContext);
    return (

        <div className='notes'>
            <h5>My all Notes ( {ctx.Notes.length} notes )</h5>
            <div className='notes-cards'>
                {
                  ctx.Notes.length > 0 &&  ctx.Notes.map((note, index) => {
                        return <NoteCard note={note} key={note._id}  />
                    })
                }
            </div>

        </div>
    )
}


export default Notes