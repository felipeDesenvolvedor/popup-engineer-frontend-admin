
import { ILayerConfig } from '../../../../../interfaces/ILayerConfig'; 

interface IModelLayerTwo {
  children:React.ReactNode;
  styles:ILayerConfig
}

export const ModelLayerTwo: React.FC<IModelLayerTwo> = ({children, styles}) => {
  console.log(styles);
  return (
    <div style={styles}>
      <div>{children}</div>
    </div>
  );
};