import { Box } from '@mui/material';
import { ModelForm } from './ModelForm';
import { ModelImg } from './ModelImg';
import { ModelLayerOne } from './ModelLayerOne';
import { ModelLayerTwo } from './ModelLayerTwo';
import { IConfigPopUp } from '../../../../interfaces/IConfigPopUp';


interface IModeItem {
  children?:React.ReactNode;
  style?:React.CSSProperties
}

export const ModelItem:React.FC<IModeItem> = ({children, style}) =>  {
  
  const popUpStyles:IConfigPopUp = {
    overlay: {
      height:'100%',
      padding:'30px',
      backgroundColor:'rgba(26, 18, 18, 0.5)',
      position: 'static',
      top:'0'
    },
    popup: {
      color:'#000',
      backgroundColor:'#fff',
      height:'100%', 
      width:'100%', 
      position:'absolute', 
      top:'50%', 
      left:'50%', 
      transform:'translate(-50%, -50%)',
      layerOne:{
        width:'50%'
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

  
  return(
    <Box style={{...popUpStyles.overlay}}>
      <Box style={{position:'relative', height:'100%'}}>

        <div style={{...popUpStyles.popup, display:'flex'}}>
          <ModelLayerOne styles={popUpStyles.popup.layerOne}>
          </ModelLayerOne>
          {children}
          <ModelLayerTwo styles={popUpStyles.popup.layerTwo}>
          </ModelLayerTwo>
        </div>
      </Box>
    </Box>
  );
};