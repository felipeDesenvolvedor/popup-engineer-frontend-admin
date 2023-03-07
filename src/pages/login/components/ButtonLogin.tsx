enum ButtonTypes {
    'button',
    'submit',
    'reset',
    undefined
}

interface IButtonLogin {
    type?:'button' | 'submit' | 'reset' | undefined;
    onClick:() => void;
    children:React.ReactNode;
}

export const ButtonLogin: React.FC<IButtonLogin> = ({type, onClick,children}) => {
  return(
    <button type={type} onClick={onClick}>{children}</button>
  );
};