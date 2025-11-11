import React, { useState } from 'react'

const Login = () => {

  const [state, setState] = useState('Sign Up')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')


  const onSubmitHandler = async (event) => {

    event.prevenDefault()


  }


  return (
    <form className='min-h-[80vh] flex items-center'>

      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state === 'Sign Up' ? "Create Account" : "LogIn"}</p>

        <p>Please {state === 'Sign Up' ? "Sign up" : "log in"} to book appointment</p>

        {
          state === "Sign Up" && <div className='w-full'>
            <p>Full Name</p>
            <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e) => setName.apply(e.target.name)} value={name} />
          </div>

        }


        <div className='w-full'>
          <p>Email</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="email" onChange={(e) => setEmail.apply(e.target.name)} value={email} required />
        </div>

        <div className='w-full'>
          <p>Password</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="password" onChange={(e) => setPassword.apply(e.target.name)} value={password} required />
        </div>

        <button className='bg-violet-500 text-white w-full rounded-md py-2 text-base cursor-pointer'>{state === 'Sign Up' ? "Create Account" : "LogIn"}</button>
        {
          state === "Sign Up"
            ? <p>Already have an account? <span onClick={() => setState('Login')} className='text-violet-500 underline cursor-pointer'>Login here</span> </p>
            : <p>Create an new account? <span onClick={() => setState('Sign Up')} className='text-violet-500 underline cursor-pointer'>Click Here</span></p>
        }

      </div>



    </form>

  )
}

export default Login