import { ModelForm } from './ModelForm';
import { ModelImg } from './ModelImg';
import { ModelLayerOne } from './ModelLayerOne';
import { ModelLayerTwo } from './ModelLayerTwo';

interface IModeItem{
  children:React.ReactNode;
}

export const ModelItem:React.FC<IModeItem> = ({children}) =>  {
  return(
    <div>
      <ModelLayerOne><ModelImg /></ModelLayerOne>
      {children}
      <ModelLayerTwo><ModelForm/></ModelLayerTwo>
    </div>
  );
};