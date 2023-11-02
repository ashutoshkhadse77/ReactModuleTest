// @flow 
import * as React from 'react';
import "./NotesList.css"
import { Fallback } from './Fallback/Fallback';
import { Avatar, FormControl, FormHelperText, IconButton, InputAdornment, OutlinedInput, Typography, useMediaQuery } from '@mui/material';
import { Notes } from './Notes/Notes';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export const NotesList = ({ selectedGroup, handleNewNote, filteredNotes, setSelectedGroup }) => {
  const [newNote, setNewNote] = React.useState('');

  const isMobile = useMediaQuery('(max-width:768px)');
  const handleNoteChange = (e) => {
    if (e.target.value.length > 150) return;
    setNewNote(e.target.value);
  }

  const handleSend = () => {
    handleNewNote(newNote);
    setNewNote('');
  }
  return (
    <div className="note-container" style={{ backgroundColor: !selectedGroup ? "#F7ECDC" : "" }}>
      {!selectedGroup && (
        <Fallback />)}
      {selectedGroup && (
        <div className="note-container-body">
          <div className='notes-header'>
            <div className={'notes-header-right'}>
              {isMobile && <IconButton onClick={() => setSelectedGroup("")} >
                <ArrowBackIcon />
              </IconButton>}
              <Avatar sx={{ bgcolor: selectedGroup.color, mr: "1rem" }}>
                {selectedGroup.name?.slice(0, 2).toUpperCase()}
              </Avatar>
              <Typography variant='body1' fontWeight={"bold"}>
                {selectedGroup.name}
              </Typography>
            </div>
          </div>
          <Notes filteredNotes={filteredNotes} />
          <div className='note-text-container'>
            <FormControl sx={{ width: '100%' }} variant="outlined">
              <OutlinedInput
                fullWidth
                multiline
                maxRows={3}
                placeholder='Enter your text here...'
                id="outlined-adornment-weight"
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  'aria-label': 'weight',
                }}
                value={newNote}
                sx={{ pr: 0, bgcolor: 'white' }}
                onChange={handleNoteChange}
                onKeyDown={(ev) => {
                  if (ev.key === 'Enter') {
                    ev.preventDefault();
                    handleSend()
                  }
                }}

              />
            </FormControl>
            <IconButton style={{ position: "absolute", right: "1rem", bottom: "2.5rem" }} onClick={handleSend} >
              <SendIcon />
            </IconButton>
          </div>
        </div>
      )}
    </div>

  );
};