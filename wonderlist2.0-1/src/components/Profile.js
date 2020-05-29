import React from 'react';
import TodosList from './TodosList';

const Profile = () => {
  return (
    <div>
      <h1 style={{display:'inline'}}>Here are your tasks</h1>
      <TodosList />
    </div>
  );
};

export default Profile;
