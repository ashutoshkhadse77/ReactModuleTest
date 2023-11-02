// @flow 
import * as React from 'react';
import "./Notes.css"
import { Typography } from '@mui/material';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', "November", 'December'];

const convertTimeStampIntoDate = (timestamp) => {
  const date = new Date(timestamp);
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};

const convertTimeStampIntoTime = (timestamp) => {
  const date = new Date(timestamp);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  return `${hours}:${minutes} ${ampm}`;
}
export const Notes = ({ filteredNotes }) => {
  return (
    <div className='notes-list-container'>

      {filteredNotes.map((note, index) => (
        <div key={index} className='note-card'>
          <div className='note-card-timestamp'>
            <Typography variant='body2' style={{ marginRight: "0.5rem" }}>
              {convertTimeStampIntoTime(note.timestamp)}
            </Typography>
            <Typography variant='body2' style={{ marginRight: "0.5rem" }}>
              {convertTimeStampIntoDate(note.timestamp)}
            </Typography>
          </div>
          <div className='note-card-text'>
            {note.content}

          </div>
        </div>
      ))}

    </div>
  );
};