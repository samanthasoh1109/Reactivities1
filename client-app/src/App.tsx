import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';

// js dunction  - sam
function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities').then(response => {
      console.log(response);
      setActivities(response.data);
    })
  }, []) // adding empty array to prevent the looping



  // return jsx - output shown in the page - sam
  return (
    <div>  {/* html-class | jsx-className - className="App" - sam */}
      <Header as='h2' icon='users' content='Reactivities'></Header>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <List>
          {activities.map((activity: any) => (
            <List.Item key={activity.id}>
              {activity.title}
            </List.Item>
          ))}
        </List>

        {/* style={{color:'red'}} - use an object way to pass the CSS - sam */}
        {/* <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
    </div>
  );
}

export default App;
