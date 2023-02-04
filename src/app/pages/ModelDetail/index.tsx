import { useParams } from 'react-router';
import { Box } from '@mui/system';
import { Dashboard } from '../dashboard/Dashboard';
import { MenuOptions } from './Components/MenuOptions';
import { ContainerPopUp } from './Components/ContainerPopUp';
import { useState } from 'react';
import { IDashboard } from '../../interfaces/IDashboard';

export const ModelDetail = () => {
  const [openMenu, setOpenMenu] = useState(true);
  const {id} = useParams();
  return(
    <Box style={{display:'flex', height:'100vh'}}>
      <Dashboard openMenuInitial={openMenu} setOpen={setOpenMenu}/>
      <Box sx={{flexGrow:'0'}}><MenuOptions /></Box>
      <Box sx={{flexGrow:'2'}}><ContainerPopUp /></Box>
    </Box>
  );
};