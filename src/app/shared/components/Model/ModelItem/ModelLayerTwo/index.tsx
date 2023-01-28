
interface IModelLayerTwo {
  children:React.ReactNode;
}

export const ModelLayerTwo: React.FC<IModelLayerTwo> = ({children}) => {
  return (
    <div style={{background:'#ddd', width:'50%'}}>
      <div>{children}</div>
      <div>ModelLayerTwo</div>
    </div>
  );
};