import { ModelForm } from './ModelForm';
import { ModelImg } from './ModelImg';
import { ModelLayerOne } from './ModelLayerOne';
import { ModelLayerTwo } from './ModelLayerTwo';

export const ModelItem = () =>  {
  return(
    <div>
      <ModelLayerOne><ModelImg /></ModelLayerOne>
      <ModelLayerTwo><ModelForm/></ModelLayerTwo>
    </div>
  );
};