import { Login } from "./Components/Login";
import { Profile } from "./Components/Profile";
import { UserContext } from "./Context/UserContext";
import { UserContextProvider } from "./Context/UserContextProvider";
import { useContext } from "react";

const AppContext = () => {
  const { user } = useContext(UserContext);
  return <>{user ? <Profile /> : <Login />}</>;
};

function App() {
  return (
    <>
      <UserContextProvider>
        <AppContext />
      </UserContextProvider>
    </>
  );
}

export default App;
