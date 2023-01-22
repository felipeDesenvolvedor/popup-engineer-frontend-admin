
import {createContext} from 'react';

interface IUsuarioLogadoContextData {
    nomeDoUsuario?:string,
    children?:React.ReactNode
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoContextData> = ({children}) => {
  return (
    <UsuarioLogadoContext.Provider value={{nomeDoUsuario:'Felipe'}}>
      {children}
    </UsuarioLogadoContext.Provider>
  );
};