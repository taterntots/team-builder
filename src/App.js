import React, { useState } from 'react';

import Members from './components/Members';

import './App.css';

function App() {
  const [teamMemberList, setTeamMemberList] = useState([
    {
      id: 1,
      name: 'Matthew',
      email: 'matthew.a.weidner@gmail.com',
      role: 'Web Developer'
    }
  ]);
  
  return (
    <div className="App">
      <h1>My Team</h1>
      <Members teamMemberList={teamMemberList} />
    </div>
  );
}

export default App;
