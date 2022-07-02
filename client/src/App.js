import logo from './logo.svg';
import './App.css';
import Login from './views/Login';
import UserProvider from './UserContext';
import Register from './views/Register';

function App() {
  return (
    <UserProvider >
      <div className="App">
        {/* <Login /> */}
        <Register />
      </div>
    </UserProvider>
  );
}

export default App;
