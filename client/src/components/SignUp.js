import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signUp } from '../store/actions/authActions';
import { withRouter } from 'react-router-dom'

const SignUp = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [department, setDepartment] = useState('');
  const { signUp, history } = props;

  const onSubmitForm = (event) => {
    event.preventDefault();
    signUp({username, password, department}, history)
  }

  return (
    <form onSubmit={onSubmitForm}>
      <input placeholder="username" value={username} required onChange={(e) => setUsername(e.target.value)} />
      <input placeholder="password" value={password} required onChange={(e) => setPassword(e.target.value)} />
      <input placeholder="department" value={department} required onChange={(e) => setDepartment(e.target.value)} />
      <button type="submit" >Submit</button>
    </form>
  )
}

export default connect(null, { signUp })(withRouter(SignUp));