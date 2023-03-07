
import { ILayerConfig } from 'interfaces/ILayerConfig'; 

interface IModelLayerTwo {
  children:React.ReactNode;
  styles:ILayerConfig
}

export const ModelLayerTwo: React.FC<IModelLayerTwo> = ({children, styles}) => {
  
  const handleDragEnter = (event:any) => {
    event.preventDefault();
  };
  
  const handleDragOver = (event:any) => {
    event.preventDefault();
  };

  const handleDrop = (event:any) => {
    console.log(event);
    event.preventDefault();
  };

  return (
    <div className='item-target' id="item-target-2" style={styles} onDrop={handleDrop} onDragOver={handleDragOver} onDragEnter={handleDragEnter}>
      <div>{children}</div>
    </div>
  );
};