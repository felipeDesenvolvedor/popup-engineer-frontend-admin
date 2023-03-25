import { ILayerConfig } from 'interfaces/ILayerConfig';
import CSS from 'csstype';
import { Imagen } from '../ModelImg';
import { SubTitulo } from '../ModelSubtitulo';
import { Titulo } from '../ModelTitulo'; 
import { Texto } from '../ModelTexto';
import { Label } from '../ModelLabel';
import { Input } from '../ModelInput';
import {connect} from 'react-redux';

interface IModelLayerOne {
  children:JSX.Element[] | [];
  styles?: ILayerConfig;
  setElements:React.Dispatch<React.SetStateAction<JSX.Element[]>>;
  elements:number;
  addItem:(item:number) => void;
}

const elementsDraggable = {
  'Imagen':<Imagen/>,
  'Titulo':<Titulo styleTitle={{fontSize:'20px', fontFamily:'Roboto'}} text='Teste'/>,
  'SubTitulo':<SubTitulo/>,
  'Texto':<Texto/>,
  'Label':<Label/>,
  'Input':<Input/>,

};

const ModelLayerOne:React.FC<IModelLayerOne> = ({children, styles, setElements, elements, addItem}) => {
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
    event.preventDefault();

    const buildElements = (element:JSX.Element[]):JSX.Element[] => {
      const key = event?.dataTransfer.getData('text/plain') as keyof typeof elementsDraggable;
      const elementsType:JSX.Element[] = [...element, elementsDraggable[key]];
      return elementsType;
    };
    
    addItem(20);
    setElements((element:JSX.Element[]) => buildElements(element));
  };

  return (
    <div className='item-target' id="item-target-1" style={{...stylesProperties}} onDrop={handleDrop} onDragOver={handleDragOver} onDragEnter={handleDragEnter}>
      <div>{children ||  <p>Nenhum elemento encontrado !</p>} elements {elements}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    elements: state.elements
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addItem: (item) => dispatch({type:'addItem', peyload:item})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModelLayerOne);