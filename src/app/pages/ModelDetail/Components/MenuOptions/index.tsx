import { MenuItem, MenuList, Menu, Box } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import InputIcon from '@mui/icons-material/Input';
import LabelIcon from '@mui/icons-material/Label';
import TitleIcon from '@mui/icons-material/Title';
import ShortTextIcon from '@mui/icons-material/ShortText';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import React, { useCallback, useEffect, useState } from 'react';

interface IMenuOptions {
    icon:React.ReactNode;
    text:string
}

export const MenuOptions = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const [itens, setItens] = useState<IMenuOptions[]>([]);

  const handleOpenMenu = useCallback((e:any) => {
    setAnchorEl((oldAnchorEl) => {
      return oldAnchorEl ? null : e.currentTarget;
    });
  }, []);

  useEffect(() => { 
    setItens([
      {icon:<ImageIcon/>, text:'Imagen'},
      {icon:<LabelIcon/>, text:'Label'},
      {icon:<InputIcon/>, text:'Input'},
      {icon:<TitleIcon/>, text:'Título'},
      {icon:<ShortTextIcon/>, text:'Texto'},
      {icon:<ColorLensIcon/>, text:'Overlay'}
    ]);
  }, []);
  
  
  return (
    <div>
      <Box 
        id='basic-button' 
        style={{marginBottom:'50px', cursor:'pointer'}}
        aria-controls={openMenu ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={openMenu ? 'true' : undefined} 
        onClick={handleOpenMenu}
      >
        {!openMenu ? <ExpandMoreIcon />: <ExpandLessIcon />}
      </Box>

      <Menu
        id="basic-menu" 
        open={openMenu} 
        anchorEl={anchorEl} 
        onClose={handleOpenMenu} 
        MenuListProps={{'aria-labelledby': 'basic-button'}}
      >
        {itens.map(iten => <MenuItem key={iten.text}>{iten.icon}</MenuItem>)}    
      </Menu>
    </div>
  );
};