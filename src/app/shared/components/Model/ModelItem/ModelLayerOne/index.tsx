import { ILayerConfig } from '../../../../../interfaces/ILayerConfig';
import CSS from 'csstype';


interface IModelLayerOne {
  children:React.ReactNode;
  styles?: ILayerConfig;
}

export const ModelLayerOne:React.FC<IModelLayerOne> = ({children, styles}) => {
  console.log(styles);
  const stylesProperties:CSS.Properties = {
    ...styles
  };
  console.log(stylesProperties);

  return (
    <div style={{...stylesProperties}}>
      <div>{children}</div>
    </div>
  );
};