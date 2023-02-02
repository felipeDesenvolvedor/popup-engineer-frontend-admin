import { useParams } from 'react-router';
import { Box } from '@mui/system';
import { Dashboard } from '../dashboard/Dashboard';
import { MenuOptions } from './Components/MenuOptions';
import { ContainerPopUp } from './Components/ContainerPopUp';

export const ModelDetail = () => {
  const {id} = useParams();
  return(
    <Box>
      <Dashboard openMenuInitial={true}/>
      <Box style={{display:'flex', height:'100vh'}}>
        <Box sx={{flexGrow:'0'}}><MenuOptions /></Box>
        <Box sx={{flexGrow:'2'}}><ContainerPopUp /></Box>
      </Box>
    </Box>
  );
};