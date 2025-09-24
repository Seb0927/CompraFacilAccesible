import { useContext, useState, useRef } from 'react'

import { UserContext } from '@/contexts/UserContext'

const Login = () => {
  const { users, setUser } = useContext(UserContext);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const errorRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError('Por favor, complete todos los campos');
      return;
    }
    
    const foundUser = users.find(u => u.email === email && u.password === password);
    
    if (foundUser) {
      setUser(foundUser)
      window.location.href = '/';
    } else {
      setError('Credenciales incorrectas. Para facilitar pruebas, use john@comprafacil.com y comprafacil1234');
      errorRef.current.focus();
    }
  };

  return (
    <div className='flex justify-center w-full'>
      <section className='h-auto w-full md:w-4/5 lg:w-8/12 py-8 px-8 bg-blue-medium-light'>
        <form className='flex flex-col space-y-4' onSubmit={handleSubmit}>
          <h1 className='text-4xl font-bold'>Iniciar sesión</h1>
          <p className='text-lg'>Ingresa tus credenciales para CompraFácil:</p>
          
          {error && (
            <p 
              ref={errorRef}
              className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500'
              role='alert'
              tabIndex={-1}
            >
              {error}
            </p>
          )}

          <div className='flex flex-col space-y-1'>
            <label className='block' htmlFor='email'>
              Correo electrónico
            </label>
            <input 
              aria-required='true' 
              className='w-full h-9 bg-blue-dark px-1 text-white' 
              id='email'
              type='email'
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='flex flex-col space-y-1'>
            <label className='block' htmlFor='password'>
              Contraseña
            </label>
            <input 
              aria-required='true' 
              className='w-full h-9 bg-blue-dark px-1 text-white' 
              id='password'
              type='password'
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className='text-sm italic'>La contraseña es aquella que usted utilizó en el registro</p>
          </div>

          <div className='flex flex-col space-y-2 items-center'>
            <button 
              className='h-9 w-32 bg-blue-dark text-white text-lg hover:bg-blue-darkest'
              type='submit'>
              Iniciar sesión
            </button>
            <a className='underline hover:text-blue-darkest' href='/register'>¿No tienes cuenta? Regístrate</a>
          </div>
        </form>
      </section>
    </div>
  )
}

export default Login