import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/system';
import { ModelItem } from '../../../../shared/components/Model/ModelItem';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowRightSharpIcon from '@mui/icons-material/KeyboardArrowRightSharp';

export const ContainerPopUp = () => {
  return (
    <>
      <ModelItem>
        <Button style={{position:'absolute', right:'20px', top:'20px'}}><CloseIcon /></Button>
        <Button style={{position:'absolute', right:'0', bottom:'-18px', backgroundColor:'#008000'}} variant="contained">Salvar</Button>
        <Box style={{position:'absolute', right:'120px', bottom:'-15px'}} ><KeyboardArrowLeftIcon style={{backgroundColor:'rgb(25, 118, 210)', borderRadius:'3px'}}/> <KeyboardArrowRightIcon style={{backgroundColor:'rgb(25, 118, 210)', borderRadius:'3px'}}/></Box>

        {/* <div style={{position:'absolute', width:'400px', height:'400px', backgroundColor:'red', right:'540px', top:'100px'}} className='item-target' id="item-target-1">element draggable target</div>
        <div style={{position:'absolute', width:'400px', height:'400px', backgroundColor:'red', right:'120px', top:'100px'}} className='item-target' id="item-target-2">element draggable target</div>
        <div style={{position:'absolute', right:'140px', top:'200px'}} className="item-draggable" id="item-draggable-1" draggable="true">
          element draggable
          <div id='item-1' style={{display:'none'}}>element copy 1</div>
          <div id='item-2' style={{display:'none'}}>element copy 2</div>
        </div>
        <div style={{position:'absolute', right:'140px', top:'400px'}} className="item-draggable" id="item-draggable-2" draggable="true">
          element draggable
          <div id='item-3' style={{display:'none'}}>element copy 3</div>
          <div id='item-4' style={{display:'none'}}>element copy 4</div>
        </div> */}
      </ModelItem>
    </>
  );
};