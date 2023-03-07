import { Box } from '@mui/material';
import { ModelForm } from './ModelForm';
import { ModelLayerOne } from './ModelLayerOne';
import { ModelLayerTwo } from './ModelLayerTwo';
import { IConfigPopUp } from 'interfaces/IConfigPopUp';
import TextField from '@mui/material/TextField';
import CSS from 'csstype';


interface IModeItem {
  children?:React.ReactNode;
  style?:React.CSSProperties;
  setElements:(elements:JSX.Element[]) => void;
}

export const ModelItem:React.FC<IModeItem> = ({children, style, setElements}) =>  {
  
  const overlarDefinition: CSS.Properties = {
    height:'100%',
    padding:'30px',
    backgroundColor:'rgba(26, 18, 18, 0.5)',
    position: 'static',
    top:'0'
  };
  const popupDefinition:CSS.Properties = {
    color:'#000',
    backgroundColor:'#fff',
    height:'100%', 
    width:'100%', 
    position:'absolute', 
    top:'50%', 
    left:'50%', 
    transform:'translate(-50%, -50%)',
    display:'flex'
  };

  const popUpStyles = {
    overlay: {
      ...overlarDefinition
    },
    popup: {
      ...popupDefinition,
      layerOne:{
        width:'50%',
      },
      layerTwo:{
        height:'100%',
        width:'50%',
        backgroundImage:'url(https://www.guiaviagensbrasil.com/imagens/praia-costa-itacare-ba-9599.jpg)',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center bottom'
      },
      elementsInformation:'layerOne'
    }
  };

  const SwitchLayer = () => {
    return (
      <>
        {children}
      </>
    );
  };

  
  return(
    <Box sx={{...popUpStyles.overlay}}>
      <Box sx={{position:'relative', height:'100%'}}>

        <div style={{...popUpStyles.popup}}>
          <ModelLayerOne setElements={setElements} styles={{...popUpStyles.popup.layerOne}}>
            {popUpStyles.popup.elementsInformation === 'layerOne' && <SwitchLayer />}
          </ModelLayerOne>
          <ModelLayerTwo styles={{...popUpStyles.popup.layerTwo}}>
            {popUpStyles.popup.elementsInformation === 'layerTwo' && <SwitchLayer />}
          </ModelLayerTwo>
        </div>
      </Box>
    </Box>
  );
};