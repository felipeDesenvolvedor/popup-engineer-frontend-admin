import { MenuItem, MenuList } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import InputIcon from '@mui/icons-material/Input';
import LabelIcon from '@mui/icons-material/Label';
import TitleIcon from '@mui/icons-material/Title';
import ShortTextIcon from '@mui/icons-material/ShortText';
import ColorLensIcon from '@mui/icons-material/ColorLens';

import { useCallback, useEffect, useState } from 'react';

interface IMenuOptions {
    icon:React.ReactNode;
    text:string
}

export const MenuOptions = () => {
  const [open, setOpen ] = useState(false);
  const [itens, setItens] = useState<IMenuOptions[]>([]);

  const handleOpenManu = useCallback(() => {
    setOpen(open => {
      return open ? false : true;
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
    <>
      <button onClick={handleOpenManu}>{open ? 'Abrir': 'Fechar'}</button>
      <MenuList>
        {itens.map(iten => <MenuItem key={iten.text}>{iten.icon}</MenuItem>)}    
      </MenuList>
    </>
  );
};