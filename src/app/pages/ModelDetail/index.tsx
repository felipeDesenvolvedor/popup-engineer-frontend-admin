import { useParams } from 'react-router';
import { Box } from '@mui/system';
import { Dashboard } from '../dashboard/Dashboard';

export const ModelDetail = () => {
  const {id} = useParams();
  return(
    <Box>
      <Dashboard />
      <p style={{marginLeft:'200px'}}>Edição de modelo de Popup {id}</p>
    </Box>
  );
};