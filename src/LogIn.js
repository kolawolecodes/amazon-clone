import React from 'react';
import "./logIn.css"

function LogIn() {
  return (
    <div className="signIn">
      <h3 className='title'>Sign In</h3>
      <div className='input_wrap'>
      <input type="email" name="email" id="email" placeholder='Email' autoComplete='off' />
      <input type="password" name="password" id="password" placeholder='password' />
      <button  className='sign_btn'>Sign in</button>
      </div>

      <p className='condition'>By signing in, you agree to the terms and conditions</p>
      <button className='register_btn'>Create your Amazon Account</button>

    </div>
  );
}

export default LogIn