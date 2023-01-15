// import { useNavigate  } from 'react-router-dom';

import { useState } from 'react';

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
    
  const handleEntrar = () => {
    console.log('email', email);
  };

  return (
    <>
      <form>
        <label>
          <span>Email</span>
          <input value={email} type='text' onChange={e => setEmail(e.target.value)}/>
        </label>

        <label>
          <span>Senha</span>
          <input type='password'/>
        </label>

        <button onClick={handleEntrar} type='button'>
            Entrar
        </button>
      </form>
    </>
  );
};