import logo from './logo.svg';
import './App.css';
import Login from './views/Login';
import UserProvider from './UserContext';
import Register from './views/Register';
import Header from './components/Header';

function App() {
  return (
    <UserProvider >
      <div className="App">
        {/* <Login /> */}
        {/* <Register /> */}
        <Header />
      </div>
    </UserProvider>
  );
}

export default App;
