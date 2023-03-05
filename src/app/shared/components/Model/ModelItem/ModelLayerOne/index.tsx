import { ILayerConfig } from '../../../../../interfaces/ILayerConfig';
import CSS from 'csstype';


interface IModelLayerOne {
  children:React.ReactNode;
  styles?: ILayerConfig;
}

export const ModelLayerOne:React.FC<IModelLayerOne> = ({children, styles}) => {
  const stylesProperties:CSS.Properties = {
    ...styles
  };

  const handleDragEnter = (event:any) => {
    event.preventDefault();
  };
  
  const handleDragOver = (event:any) => {
    event.preventDefault();
  };

  const handleDrop = (event:any) => {
    console.log(event);
    event.preventDefault();
    const draggable = document.querySelector(event.dataTransfer.getData('text/plain')).querySelector('div');
    if(!draggable) {
      alert('Não é possivel adicionar mais de 3 elementos !');
      return;
    }

    draggable.style.display='block';
    event.target.appendChild(draggable);
  };

  return (
    <div className='item-target' id="item-target-1" style={{...stylesProperties}} onDrop={handleDrop} onDragOver={handleDragOver} onDragEnter={handleDragEnter}>
      <div>{children}</div>
    </div>
  );
};