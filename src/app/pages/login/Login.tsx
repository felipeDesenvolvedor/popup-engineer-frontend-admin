// import { useNavigate  } from 'react-router-dom';

import { useCallback, useMemo, useRef, useState } from 'react';

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
    passwordLength();
  };

  return (
    <>
      <form>
        <p>Quantidade de caracteres no email {emailLength}</p>
        <label>
          <span>Email</span>
          <input value={email} type='text' onKeyDown={e => e.key === 'Enter' ? inputPasswordRef.current?.focus() : undefined} onChange={e => setEmail(e.target.value)}/>
        </label>

        <label>
          <span>Senha</span>
          <input value={senha} type='password' ref={inputPasswordRef} onChange={e => setSenha(e.target.value)}/>
        </label>

        <button onClick={handleEntrar} type='button'>
            Entrar
        </button>
      </form>
    </>
  );
};