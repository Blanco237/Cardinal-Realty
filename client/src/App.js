
import UserProvider from './UserContext';
import AppRouter from './Router/AppRouter';

function App() {
  return (
    <UserProvider >
      <AppRouter />
    </UserProvider>
  );
}

export default App;
