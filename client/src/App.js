import logo from './logo.svg';
import './App.css';
import Login from './views/Login';
import UserProvider from './UserContext';

function App() {
  return (
    <UserProvider >
      <div className="App">
        <Login />
      </div>
    </UserProvider>
  );
}

export default App;
