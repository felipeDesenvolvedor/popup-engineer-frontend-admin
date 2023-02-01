import { MenuItem, MenuList, Menu, Box } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import InputIcon from '@mui/icons-material/Input';
import LabelIcon from '@mui/icons-material/Label';
import TitleIcon from '@mui/icons-material/Title';
import ShortTextIcon from '@mui/icons-material/ShortText';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import ListItemIcon from '@mui/material/ListItemIcon';

import React, {useEffect, useRef, useState } from 'react';

interface IMenuOptions {
    icon:React.ReactNode;
    text:string
}

export const MenuOptions = () => {
  const [itens, setItens] = useState<IMenuOptions[]>([]);
  const anchorEl = useRef<HTMLDivElement>(null);

  useEffect(() => { 
    setItens([
      {icon:<ImageIcon/>, text:'Imagen'},
      {icon:<LabelIcon/>, text:'Label'},
      {icon:<InputIcon/>, text:'Input'},
      {icon:<TitleIcon/>, text:'Título'},
      {icon:<ShortTextIcon/>, text:'Texto'},
      {icon:<ColorLensIcon/>, text:'Overlay'}
    ]);

    console.log(anchorEl);
  }, []);
  
  
  return (
    <div>
      <Box 
        id='basic-button' 
        style={{marginBottom:'50px', cursor:'pointer'}}
        aria-controls='basic-menu'
        aria-haspopup="true"
        aria-expanded='true'
        ref={anchorEl}
      >
      </Box>

      <MenuList>
        {itens.map(iten => <MenuItem key={iten.text}><ListItemIcon>{iten.icon}</ListItemIcon>{iten.text}</MenuItem>)}    
      </MenuList>
    </div>
  );
};