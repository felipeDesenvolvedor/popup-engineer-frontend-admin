// import { useNavigate  } from 'react-router-dom';

import React, { useCallback, useMemo, useRef, useState } from 'react';
import { ButtonLogin } from './components/ButtonLogin';
import {InputLogin} from './components/InputLogin';

// export const Login = () => {
//   const navigate = useNavigate();

//   const hadleClick = () => {
//     navigate('/pagina-inicial');
//   };  
    
//   return (
//     <>
//       <p>Login</p>
//       <button onClick={hadleClick}>Voltar</button>
//     </>
//   );
// };

export const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const inputPasswordRef = useRef<HTMLInputElement>(null);
    
  // const emailLength = email.length;
  const emailLength = useMemo(() => {
    return `useCallback:${email.length}`;
  }, [email.length]);

  const passwordLength = useCallback(() => {
    console.log(`useCallback:${senha.length}`);
  }, [senha.length]);

  const handleEntrar = () => {
    inputPasswordRef.current?.focus();
  };

  const handleClickEntrar = () => {
    console.log('Teste');
  };

  return (
    <>
      <form>
        <p>Quantidade de caracteres no email {emailLength}</p>

     
        {/* <InputLogin type='text' label={'Email'} value={email} onChange={setEmail} onPressEnter={handleEntrar} />
        <InputLogin  type='password' label={'Senha'} value={senha} onChange={setSenha} ref={inputPasswordRef}/> */}

        {/* <button onClick={passwordLength} type='button'>
            Entrar
        </button> */}

        <ButtonLogin type='button' onClick={handleClickEntrar}>Entrar</ButtonLogin>
      </form>
    </>
  );
};