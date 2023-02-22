
import ILayerConfig from '../../../../../interfaces/IPopUp/ILayerConfig';

interface IModelLayerTwo {
  children:React.ReactNode;
  styles:ILayerConfig
}

export const ModelLayerTwo: React.FC<IModelLayerTwo> = ({children, styles}) => {
  return (
    <div style={{...styles}}>
      <div>{children}</div>
    </div>
  );
};