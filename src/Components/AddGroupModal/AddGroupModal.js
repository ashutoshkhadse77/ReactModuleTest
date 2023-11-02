// @flow 
import * as React from 'react';
import { Modal, Button, TextField, Select, MenuItem, FormControl, InputLabel, IconButton } from '@mui/material';
import './AddGroupModal.css';
import { ButtonIn } from '../../ComponentLibrary/Button/ButtonIn';
import CloseIcon from '@mui/icons-material/Close';

const colours = ["#B38BFA", "#6691FF", "#0047FF", "#F19576", "#43E6FC", "#FF79F2"]

export const AddGroupModal = ({ openModal, setOpenModal, handleNewGroup }) => {

  const [newGroupName, setNewGroupName] = React.useState('');
  const [groupColor, setGroupColor] = React.useState('');

  const handleCreate = () => {
    handleNewGroup(newGroupName, groupColor)
    setNewGroupName('')
    setGroupColor('')
  }
  return (
    <Modal open={openModal} onClose={() => setOpenModal(false)} className="add-group-modal">
      <div className="modal-container">
        <div className='modal-header'>
          <h2>Create New Notes group</h2>
          <IconButton onClick={() => setOpenModal(false)} >
            <CloseIcon />
          </IconButton>
        </div>
        <div className='modal-entry'>

          <label className='model-entry-label'> Group Name </label>
          <input
            label="Group Name"
            placeholder='Enter Your Group Name'
            value={newGroupName}
            onChange={(e) => setNewGroupName(e.target.value)}
            className='group-name-input'
          />
        </div>
        <div className='modal-entry'>
          <label className='model-entry-label'> Choose Colour </label>

          <div style={{ display: "flex" }}>
            {colours.map((colour, index) => (
              <div key={index} style={{ backgroundColor: colour, width: "2rem", height: "2rem", borderRadius: "50%", marginRight: "0.5rem", cursor: "pointer", border: groupColor === colour ? "1px solid black" : "none" }} onClick={() => setGroupColor(colour)}></div>
            ))
            }
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", width: "100%", marginTop: "2rem" }}>
          <div></div>
          <ButtonIn variant="contained" onClick={handleCreate} color="primary" style={{ borderRadius: "11px" }} disabled={!newGroupName || !groupColor}>
            Create
          </ButtonIn>
        </div>
      </div>
    </Modal>
  );
};