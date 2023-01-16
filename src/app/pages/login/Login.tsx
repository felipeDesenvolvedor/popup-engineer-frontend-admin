// import { useNavigate  } from 'react-router-dom';

import { useMemo, useState } from 'react';

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
    
  const handleEntrar = () => {
    console.log('email', email);
  };

  // const emailLength = email.length;
  const emailLength = useMemo(() => {
    return email.length + 1;
  }, [email.length]);

  console.log(emailLength + 1);


  return (
    <>
      <form>
        <p>Quantidade de caracteres no email {emailLength}</p>
        <label>
          <span>Email</span>
          <input value={email} type='text' onChange={e => setEmail(e.target.value)}/>
        </label>

        <label>
          <span>Senha</span>
          <input value={senha} type='password' onChange={e => setSenha(e.target.value)}/>
        </label>

        <button onClick={handleEntrar} type='button'>
            Entrar
        </button>
      </form>
    </>
  );
};