import { Box, Drawer, keyframes, ListItem, ListItemIcon, ListItemText, MenuItem, MenuList } from '@mui/material';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import GroupsIcon from '@mui/icons-material/Groups';
import { useCallback, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useUsuarioLogado } from '../../shared/hooks';

interface IListItem {
 title:string;
 isSelected:boolean;
}

export const Dashboard = () => {

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
    <Drawer 
      variant='permanent' 
      anchor="left"
      sx={{display: 'flex', marginRight:'200px'}}>
      <Box sx={{display:'flex', flexDirection:'column', backgroundColor:'#f5f5f5', flexBasis:'100%', alignItems:'center'}}>
        
        <p>List</p>
        <p>Teste {lista.filter(ListItem => ListItem.isSelected).length}</p>
        <input onKeyDown={handleInputKeyDow} />
        <p>{}</p>
        <ul>
          {/* {lista.map((value) => {
            return (
              <li key={value}>{value}</li>
            );
          })} */}

          {listItens()}
        </ul>

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