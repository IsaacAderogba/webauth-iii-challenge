import React, { useState } from 'react';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [department, setDepartment] = useState('');

  const onSubmitForm = (event) => {
    event.preventDefault();
    console.log(username, password, department);
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

export default SignUp;