import { Box, Drawer, ListItemIcon, ListItemText, MenuItem, MenuList } from '@mui/material';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import GroupsIcon from '@mui/icons-material/Groups';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useUsuarioLogado } from '../../shared/hooks';

export const Dashboard = () => {

  const counterRef = useRef({counter:0});
  const  {nomeDoUsuario, logout} = useUsuarioLogado();
  return (
    <Drawer 
      variant='permanent' 
      anchor="left"
      sx={{display: 'flex', marginRight:'200px'}}>
      <Box sx={{display:'flex', flexDirection:'column', backgroundColor:'#f5f5f5', flexBasis:'100%', alignItems:'center'}}>
        <MenuList sx={{flexBasis:'100%'}}>
          <MenuItem>
            <ListItemIcon><WysiwygIcon /></ListItemIcon>
            <ListItemText>Modelos</ListItemText>
          </MenuItem>

          <MenuItem>
            <ListItemIcon><IntegrationInstructionsIcon /></ListItemIcon>
            <ListItemText>Integrações</ListItemText>
          </MenuItem>
          
          <MenuItem>
            <ListItemIcon><EmojiPeopleIcon /></ListItemIcon>
            <ListItemText>Leads</ListItemText>
          </MenuItem>
          
          <MenuItem>
            <ListItemIcon><GroupsIcon /></ListItemIcon>
            <ListItemText>Públicos</ListItemText>
          </MenuItem>
        </MenuList>

        <button onClick={logout}>Teste</button>
        <p>v.1</p> 
        <p>{nomeDoUsuario}</p>
      </Box>
    </Drawer>
  );
};