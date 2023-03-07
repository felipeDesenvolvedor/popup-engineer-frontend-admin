import { ILayerConfig } from 'interfaces/ILayerConfig';
import CSS from 'csstype';
import { Imagen } from '../ModelImg';
import { SubTitulo } from '../ModelSubtitulo';
import { Titulo } from '../ModelTitulo'; 
import { Texto } from '../ModelTexto';
import { Label } from '../ModelLabel';
import { Input } from '../ModelInput';


interface IModelLayerOne {
  children:React.ReactNode;
  styles?: ILayerConfig;
  setElements?:(elements:JSX.Element[]) => void;
}

const elements = {
  Imagen:<Imagen/>,
  Titulo:<Titulo/>,
  SubTitulo:<SubTitulo/>,
  Texto:<Texto/>,
  Label:<Label/>,
  Input:<Input/>,

};

export const ModelLayerOne:React.FC<IModelLayerOne> = ({children, styles, setElements}) => {
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
    console.log(event?.dataTransfer.getData('text/plain'));
    event.preventDefault();
    setElements((element) => [...element, elements[event?.dataTransfer.getData('text/plain')]]);
  };

  return (
    <div className='item-target' id="item-target-1" style={{...stylesProperties}} onDrop={handleDrop} onDragOver={handleDragOver} onDragEnter={handleDragEnter}>
      <div>{children}</div>
    </div>
  );
};