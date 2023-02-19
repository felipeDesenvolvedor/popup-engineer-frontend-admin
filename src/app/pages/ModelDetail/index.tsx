import { Box } from '@mui/system';
import { Dashboard } from '../dashboard/Dashboard';
import { MenuOptions } from './Components/MenuOptions';
import { ContainerPopUp } from './Components/ContainerPopUp';
import { useState } from 'react';
import { IDashboard } from '../../interfaces/IDashboard';

export const ModelDetail = () => {
  const [openMenu, setOpenMenu] = useState(true);

  const stylesModelDetail = {
    box:{
      display:'flex', 
      height:'100vh'
    }
  };

  return(
    <Box sx={stylesModelDetail.box}>
      <Dashboard openMenuInitial={openMenu} setOpen={setOpenMenu}/>
      <Box sx={{flexGrow:'0'}}><MenuOptions /></Box>
      <Box sx={{flexGrow:'2'}}><ContainerPopUp /></Box>
    </Box>
  );
};