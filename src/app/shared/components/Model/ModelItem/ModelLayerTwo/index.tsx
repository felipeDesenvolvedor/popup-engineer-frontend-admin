
interface IModelLayerTwo {
  children:React.ReactNode;
}

export const ModelLayerTwo: React.FC<IModelLayerTwo> = ({children}) => {
  return (
    <div>
      <div>{children}</div>
      <div>ModelLayerTwo</div>
    </div>
  );
};