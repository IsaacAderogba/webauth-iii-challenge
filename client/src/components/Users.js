import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../store/actions/userActions';

const Users = (props) => {
  const { fetchUsers, users } = props;
    
  useEffect(() => {
    fetchUsers();
  }, [])

  return (
    <div>
      {users.map(user => {
        return <p key={user.username}>{user.username} - {user.department}</p>
      })}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    users: state.user
  }
}

export default connect(mapStateToProps, {fetchUsers})(Users);