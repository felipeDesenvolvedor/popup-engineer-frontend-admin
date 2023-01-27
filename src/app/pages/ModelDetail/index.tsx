import { useParams } from 'react-router';
import { Box } from '@mui/system';
import { Dashboard } from '../dashboard/Dashboard';
import { MenuOptions } from './Components/MenuOptions';

export const ModelDetail = () => {
  const {id} = useParams();
  return(
    <Box>
      <Dashboard />
      <Box style={{display:'flex', height:'100vh', marginLeft:'200px'}}>
        <Box sx={{flexGrow:'0.1'}}><MenuOptions /></Box>
        <Box sx={{flexGrow:'2'}}>Edição de modelo de Popup {id}</Box>
      </Box>
    </Box>
  );
};