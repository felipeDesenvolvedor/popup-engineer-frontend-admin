
import { ILayerConfig } from 'interfaces/ILayerConfig'; 
import { connect } from 'react-redux';


interface IModelLayerTwo {
  children:React.ReactNode;
  styles:ILayerConfig
  elements:number;
}

const ModelLayerTwo: React.FC<IModelLayerTwo> = ({children, styles, elements}) => {
  
  const handleDragEnter = (event:any) => {
    event.preventDefault();
  };
  
  const handleDragOver = (event:any) => {
    event.preventDefault();
  };

  const handleDrop = (event:any) => {
    event.preventDefault();
  };

  return (
    <div className='item-target' id="item-target-2" style={styles} onDrop={handleDrop} onDragOver={handleDragOver} onDragEnter={handleDragEnter}>
      <div>{children} elements {elements}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    elements : state.elements
  };
};

export default connect(mapStateToProps)(ModelLayerTwo);