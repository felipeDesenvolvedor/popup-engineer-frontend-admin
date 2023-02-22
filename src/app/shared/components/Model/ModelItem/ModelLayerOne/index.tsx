import ILayerConfig from '../../../../../interfaces/IPopUp/ILayerConfig';

interface IModelLayerOne {
  children:React.ReactNode;
  styles: ILayerConfig
}

export const ModelLayerOne:React.FC<IModelLayerOne> = ({children, styles}) => {
  return (
    <div style={{...styles}}>
      <div>{children}</div>
    </div>
  );
};