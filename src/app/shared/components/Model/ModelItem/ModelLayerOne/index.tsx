interface IModelLayerOne {
  children:React.ReactNode;
}

export const ModelLayerOne:React.FC<IModelLayerOne> = ({children}) => {
  return (
    <div style={{background:'#ccc', width:'50%'}}>
      <div>{children}</div>
      <div>ModelLayerOne</div>
    </div>
  );
};