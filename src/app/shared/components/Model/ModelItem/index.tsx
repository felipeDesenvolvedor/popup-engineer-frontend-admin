import { Box } from '@mui/material';
import { ModelForm } from './ModelForm';
import { ModelImg } from './ModelImg';
import { ModelLayerOne } from './ModelLayerOne';
import { ModelLayerTwo } from './ModelLayerTwo';
import { IConfigPopUp } from '../../../../interfaces/IConfigPopUp';
import TextField from '@mui/material/TextField';


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
        height:'100%',
        width:'50%',
        backgroundImage:'url(https://www.guiaviagensbrasil.com/imagens/praia-costa-itacare-ba-9599.jpg)',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center bottom'
      },
      layerTwo:{
        width:'50%'
      },
      elementsInformation:'layerTwo'
    }
  };

  const SwitchLayer = () => {
    return (
      <>
        <h2>Titulo do Popup</h2>
        <h3>Subtitulo do popup</h3>
        <p>Teexto do popup</p>
        <form>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </form> 
      </>
    );
  };

  
  return(
    <Box style={{...popUpStyles.overlay}}>
      <Box style={{position:'relative', height:'100%'}}>

        <div style={{...popUpStyles.popup, display:'flex'}}>
          <ModelLayerOne styles={popUpStyles.popup.layerOne}>
            {popUpStyles.popup.elementsInformation === 'layerOne' && <SwitchLayer />}
          </ModelLayerOne>
          {children}
          <ModelLayerTwo styles={popUpStyles.popup.layerTwo}>
            {popUpStyles.popup.elementsInformation === 'layerTwo' && <SwitchLayer />}
          </ModelLayerTwo>
        </div>
      </Box>
    </Box>
  );
};