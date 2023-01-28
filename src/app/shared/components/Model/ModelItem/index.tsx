import { ModelForm } from './ModelForm';
import { ModelImg } from './ModelImg';
import { ModelLayerOne } from './ModelLayerOne';
import { ModelLayerTwo } from './ModelLayerTwo';

interface IModeItem {
  children?:React.ReactNode;
  style:React.CSSProperties
}

export const ModelItem:React.FC<IModeItem> = ({children, style}) =>  {
  return(
    <div style={{...style, display:'flex'}}>
      <ModelLayerOne>
        {/* <ModelImg /> */}
        
      </ModelLayerOne>
      {children}
      <ModelLayerTwo>
        {/* <ModelForm/> */}
      </ModelLayerTwo>
    </div>
  );
};