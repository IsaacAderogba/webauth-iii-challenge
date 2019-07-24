import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../store/actions/authActions';
import { withRouter } from 'react-router-dom'

const SignIn = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, history } = props;

  const onSubmitForm = (event) => {
    event.preventDefault();
    signIn({username, password}, history)
  }

  return (
    <form onSubmit={onSubmitForm}>
      <input placeholder="username" value={username} required onChange={(e) => setUsername(e.target.value)} />
      <input placeholder="password" value={password} required onChange={(e) => setPassword(e.target.value)} />
      <button type="submit" >Sign In</button>
    </form>
  )
}

export default connect(null, { signIn })(withRouter(SignIn));