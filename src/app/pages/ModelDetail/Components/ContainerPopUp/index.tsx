import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/system';
import { ModelItem } from '../../../../shared/components/Model/ModelItem';

export const ContainerPopUp = () => {
  return (
    <Box style={{backgroundColor:'rgba(0,0,0, 0.5)', height:'100%', padding:'30px'}}>
      <Box style={{backgroundColor:'#fff', position:'relative', height:'100%'}}>
        <ModelItem style={{height:'100%', width:'100%', position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)'}}/>
        <Button style={{position:'absolute', right:'20px', top:'20px'}}><CloseIcon /></Button>
      </Box>
    </Box>
  );
};