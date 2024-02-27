import  { useContext, useState } from 'react'
import UserContext from '../ContextAPI/UserContext';

function Login()  {

    const { setUser } = useContext(UserContext);
    const [cndtName,setCndtName] = useState('');
    const [password,setPassword] = useState('');

    

    const handleLogin = (e) =>{
        e.preventDefault();
        setUser(cndtName);
        setUser(password);
    }

  return (
    <div className='flex justify-center m-10 items-center '>
        <div className='flex flex-col space-y-4'>
            <h1 className='text-4xl font-bold flex justify-center'>Login</h1>
            <input 
            type='text'
            className='border-1 rounded-md p-1 px-2 bg-gray-300'
            placeholder='cndt name'
            onChange={(e)=> setCndtName(e.target.value)}
            />
            
            <input
            type='password'
            placeholder='password'
            className='border-1 rounded-md p-1 px-2 bg-gray-300'
            onChange={(e)=> setPassword(e.target.value)}
            />
            <button className='bg-indigo-900 rounded-md p-2 text-white' onClick={handleLogin}>Login</button>
        </div>

    </div>
  )
}

export default Login