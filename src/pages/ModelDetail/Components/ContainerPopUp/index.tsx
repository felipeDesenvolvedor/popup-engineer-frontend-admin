import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/system';
import { ModelItem } from 'shared/components/Model/ModelItem';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const stylesButtonClose = {
  position:'absolute', 
  right:'20px', 
  top:'20px'
};

const stylesButtonSave = {
  position:'absolute', 
  right:'0', 
  bottom:'-18px', 
  backgroundColor:'#008000'
};

const stylesArrow = {
  box: {
    position:'absolute', 
    right:'120px', 
    bottom:'-15px'
  },
  left: {
    backgroundColor:'rgb(25, 118, 210)', 
    borderRadius:'3px'
  },
  rigth: {
    backgroundColor:'rgb(25, 118, 210)', 
    borderRadius:'3px'
  }
};

interface IContainerPopUp {
  children:React.ReactNode[];
  setElements:(elements:JSX.Element[]) => void;
}

export const ContainerPopUp:React.FC<IContainerPopUp> = ({children, setElements}) => {
  return (
    <>
      <ModelItem setElements={setElements}>
        <Box sx={{...stylesButtonClose}}><CloseIcon /></Box>
        <Box sx={{...stylesButtonSave}}><Button variant="contained">Salvar</Button></Box>
        <Box sx={{...stylesArrow.box}}><KeyboardArrowLeftIcon style={{...stylesArrow.left}}/> <KeyboardArrowRightIcon style={{...stylesArrow.rigth}}/></Box>

        {children}
      </ModelItem>
    </>
  );
};