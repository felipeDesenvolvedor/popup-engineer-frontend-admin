import { Box, Drawer, keyframes, ListItem, ListItemIcon, ListItemText, MenuItem, MenuList } from '@mui/material';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import MenuIcon from '@mui/icons-material/Menu';
import GroupsIcon from '@mui/icons-material/Groups';
import { useCallback, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useUsuarioLogado } from '../../shared/hooks';

interface IListItem {
 title:string;
 isSelected:boolean;
}

interface IDashboard {
  openMenuInitial?:boolean
}

export const Dashboard:React.FC<IDashboard> = ({openMenuInitial}) => {

  const [openMenu, setOpenMenu] = useState(openMenuInitial);
  const counterRef = useRef({counter:0});
  const  {nomeDoUsuario, logout} = useUsuarioLogado();
  const [lista, setLista] = useState<IListItem[]>([]);
  
  const handleInputKeyDow:React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
    if(e.key == 'Enter') {
      if(e.currentTarget.value.trim().length === 0) return;

      const value = e.currentTarget.value;
      e.currentTarget.value = '';
      // setLista([...lista, e.currentTarget.value]);
      setLista((oldLista) => {
        if(oldLista.some(Listitem => Listitem.title == value)) return oldLista;

        return [...oldLista, {
          title: value,
          isSelected:false
        }];
      });
    }
  }, [lista]);

  const listItens = () => {
    return lista.map(ListItem => (
      <li key={ListItem.title}>{ListItem.title}<input type="checkbox" checked={ListItem.isSelected} id={ListItem.title} onChange={() => {
        setLista(oldLista => {
          return oldLista.map(oldListItem => {
            const nemIsSelected = oldListItem.title === ListItem.title ? !oldListItem.isSelected : oldListItem.isSelected; 
            return {
              ...oldListItem,
              isSelected: nemIsSelected
            };
          });
        });
      }}/></li>
    ));
  };

  return (
    <div style={{position:'relative'}}>
      <Box onClick={() => setOpenMenu(!openMenu)} style={{position:'absolute', left:'150px'}}>{openMenu ? <KeyboardArrowLeftIcon /> : <MenuIcon/>}</Box>
      <Drawer 
        variant='persistent' 
        anchor="left"
        sx={{display: 'flex', marginRight:'200px'}}
        open={openMenu}
      >
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
          <p>v.1</p> 
        </Box>
      </Drawer>
    </div>
  );
};