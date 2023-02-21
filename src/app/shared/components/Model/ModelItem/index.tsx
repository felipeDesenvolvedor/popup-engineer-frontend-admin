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
      width:'100%',
      height:'100%',
      padding:'30px',
      backgroundColor:'rgba(0,0,0, 0.5)',
      position: 'static',
      top:''
    },
    popup: {
      width:string,
      height:string,
      color:string,
      backgroundColor:string,
      position:string,
      left:string,
      top:string,
      transform:string,
      layerOne:ILayerConfig
      layerTwo:ILayerConfig
      elementsInformation:string
    }
  };
  
  return(
    <Box style={{backgroundColor:'rgba(26, 18, 18, 0.5)', height:'100%', padding:'30px'}}>
      <Box style={{backgroundColor:'#fff', position:'relative', height:'100%'}}>

        <div style={{...style, display:'flex'}}>
          <ModelLayerOne>
            {/* <ModelImg /> */}
        
          </ModelLayerOne>
          {children}
          <ModelLayerTwo>
            {/* <ModelForm/> */}
          </ModelLayerTwo>
        </div>
      </Box>
    </Box>
  );
};