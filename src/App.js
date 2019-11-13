import React, { useState } from 'react';

import Members from './components/Members';
import Form from './components/Form';

import './App.css';

function App() {
  const [teamMember, setTeamMember] = useState([
    {
      id: 1,
      name: 'Matthew',
      email: 'matthew@gmail.com',
      role: 'Lover of Doggos'
    },
    
    {
      id: 2,
      name: 'Spencer',
      email: 'spencer@gmail.com',
      role: 'Rider of Motorcycles'
    },

    {
      id: 3,
      name: 'William',
      email: 'william@gmail.com',
      role: 'Savant of Startups'
    },

    {
      id: 4,
      name: 'Aaron',
      email: 'aaron@gmail.com',
      role: 'Brewer of Coffee'
    }
  ]);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    }
    setTeamMember([...teamMember, newMember])
  }
  
  return (
    <div className="App">
      <h1>My Team</h1>
      <Form addNewMember={addNewMember}/>
      <Members teamMember={teamMember} />
    </div>
  );
}

export default App;