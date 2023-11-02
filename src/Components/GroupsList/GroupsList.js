// @flow 
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import FolderIcon from '@mui/icons-material/Folder';
import AddIcon from '@mui/icons-material/Add';
import './GroupsList.css';
import { ButtonIn } from '../../ComponentLibrary/Button/ButtonIn';


export const GroupsList = ({ groups, setSelectedGroup, setOpenModal, selectedGroup }) => {
  console.log(groups)
  return (
    <div className="group-container">

      <h2>Pocket Notes</h2>
      <div className="group-container-body">
        <ButtonIn
          variant="contained"
          color="primary"
          size="small"
          icon={<AddIcon />}
          onClick={() => setOpenModal(true)}
          style={{ margin: "1rem 0" }}

        >Create Notes Group</ButtonIn>
        <List >
          {groups.map((group, index) => (
            <ListItem onClick={() => setSelectedGroup(group)} sx={{ bgcolor: selectedGroup?.name === group?.name ? "#F7ECDC" : "none", borderRadius: "32px 0 0 32px", padding: "1rem" }}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: group.color }}>
                  {group.name?.slice(0, 2).toUpperCase()}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={group.name}
              />
            </ListItem>
          ))}
        </List>
      </div>
    </div>

  );
};