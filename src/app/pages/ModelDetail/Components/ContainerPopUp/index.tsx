import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/system';
import { ModelItem } from '../../../../shared/components/Model/ModelItem';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowRightSharpIcon from '@mui/icons-material/KeyboardArrowRightSharp';

export const ContainerPopUp = () => {
  return (
    <Box style={{backgroundColor:'rgba(0,0,0, 0.5)', height:'100%', padding:'30px'}}>
      <Box style={{backgroundColor:'#fff', position:'relative', height:'100%'}}>
        <ModelItem style={{height:'100%', width:'100%', position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)'}}/>
        <Button style={{position:'absolute', right:'20px', top:'20px'}}><CloseIcon /></Button>
        <Button style={{position:'absolute', right:'20px', bottom:'20px', backgroundColor:'#008000'}} variant="contained">Salvar</Button>
        <Box style={{position:'absolute', right:'140px', bottom:'20px'}} ><KeyboardArrowLeftIcon style={{backgroundColor:'rgb(25, 118, 210)', borderRadius:'3px'}}/> <KeyboardArrowRightIcon style={{backgroundColor:'rgb(25, 118, 210)', borderRadius:'3px'}}/></Box>

        <div style={{position:'absolute', right:'140px', top:'200px'}} className="item-draggable" id="item-draggable-1" draggable="true">element draggable</div>
        <div style={{position:'absolute', right:'140px', top:'400px'}} className="item-draggable" id="item-draggable-2" draggable="true">element draggable</div>
        <div style={{position:'absolute', width:'400px', height:'400px', backgroundColor:'red', right:'540px', top:'100px'}} id="item-target">element draggable target</div>
      </Box>
    </Box>
  );
};