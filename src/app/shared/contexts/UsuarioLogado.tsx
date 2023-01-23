
import {createContext, useCallback} from 'react';

interface IUsuarioLogadoContextData {
    nomeDoUsuario?:string;
    children?:React.ReactNode;
    logout?:() => void;
}


export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoContextData> = ({children}) => {
  const handleLogout = useCallback(() =>{
    console.log('Teste 2');
  },[]);
  
  return (
    <UsuarioLogadoContext.Provider value={{nomeDoUsuario:'Felipe', logout:handleLogout}}>
      {children}
    </UsuarioLogadoContext.Provider>
  );
};