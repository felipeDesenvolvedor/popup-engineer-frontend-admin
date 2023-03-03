import { ILayerConfig } from '../../../../../interfaces/IPopUp';
import CSS from 'csstype';


interface IModelLayerOne {
  children:React.ReactNode;
  styles?: ILayerConfig;
}

export const ModelLayerOne:React.FC<IModelLayerOne> = ({children, styles}) => {

  const stylesDefinition:CSS.Properties = {
    ...styles
  };

  return (
    <div style={{...stylesDefinition}}>
      <div>{children}</div>
    </div>
  );
};