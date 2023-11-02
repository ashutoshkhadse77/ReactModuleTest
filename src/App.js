import React, { useState, useEffect } from 'react';
import './App.css';
import { GroupsList } from './Components/GroupsList/GroupsList';
import { NotesList } from './Components/NotesList/NotesList';
import { AddGroupModal } from './Components/AddGroupModal/AddGroupModal';
import { useMediaQuery } from '@mui/material';

const App = () => {
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState('');
  const [notes, setNotes] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  // Load groups and notes from local storage on initial render
  useEffect(() => {
    console.log("useEffect", localStorage.getItem('groups'))
    const savedGroups = JSON.parse(localStorage.getItem('groups')) || [];
    setGroups(savedGroups);
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(savedNotes);
  }, []);


  const handleNewGroup = (newGroupName, groupColor) => {
    if (newGroupName.trim() !== '') {
      setGroups([...groups, { name: newGroupName, color: groupColor }]); // Store group name and color
      setOpenModal(false); // Close the modal after creating a new group

      // set in local storage
      localStorage.setItem('groups', JSON.stringify([...groups, { name: newGroupName, color: groupColor }]));
    }
  };

  const handleNewNote = (newNote) => {
    if (newNote.trim() !== '') {
      setNotes([...notes, { group: selectedGroup.name, content: newNote, timestamp: new Date().toLocaleString() }]);
      // set in local storage
      localStorage.setItem('notes', JSON.stringify([...notes, { group: selectedGroup.name, content: newNote, timestamp: new Date().toLocaleString() }]));

    }
  };
  console.log(groups, "groups")

  const filteredNotes = notes.filter(note => note.group === selectedGroup.name);
  const isMobile = useMediaQuery('(max-width:768px)');

  let showNotes = true;
  if (isMobile && !selectedGroup) {
    showNotes = false;
  }

  return (
    <div className="App">
      <GroupsList setOpenModal={setOpenModal} handleNewGroup={handleNewGroup} groups={groups} setSelectedGroup={setSelectedGroup} selectedGroup={selectedGroup} />
      {showNotes && <NotesList selectedGroup={selectedGroup} handleNewNote={handleNewNote} filteredNotes={filteredNotes} setSelectedGroup={setSelectedGroup} />}

      <AddGroupModal openModal={openModal} setOpenModal={setOpenModal} handleNewGroup={handleNewGroup} />
    </div>
  );
};

export default App;