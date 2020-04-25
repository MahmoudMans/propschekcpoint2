import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './profile/profile'
function App() {
  let data = {
    fullname: "Mahmoud mansouri",
    bio: "Web develloper",
    profession: "futur software ingeneiur"
  };
  const handleName = e => {
    
    alert(data.fullname);
  };
 
  return (
  
    <div className="App">
      <Profile data={data}>
      <img
          onClick={handleName}
          style={style}
          alt="img"
          src=""
        />
        </Profile>
    </div>
  );
}

export default App;
