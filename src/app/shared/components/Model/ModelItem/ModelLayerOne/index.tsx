interface IModelLayerOne {
  children:React.ReactNode;
}

export const ModelLayerOne:React.FC<IModelLayerOne> = ({children}) => {
  return (
    <div>
      <div>{children}</div>
      <div>ModelLayerOne</div>
    </div>
  );
};