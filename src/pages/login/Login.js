import React from 'react'
import './Login.scss'

export default function Login() {

    // form submit
    const handleSubmit = (e) => {
        e.preventDefault()
    }
  return (
    <div className='Login'>
        <form action="" onSubmit={handleSubmit}>
            <img src={require('../../assets/logo2.png')} alt="" />
            <button>Login With Google</button>
            <p>A YouTube Clone Project made with YouTube API</p>
        </form>
    </div>
  )
}
