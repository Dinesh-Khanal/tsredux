import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./state/hooks/redux-hook";
import { fetchUsers } from "./state/store/user-action";
import "./App.css";

function App() {
  const users = useAppSelector((state) => state.user.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <div className="App">
      <header className="App-header">
        <h2>Redux toolkit implementation with typescript</h2>
        <table style={{ border: "1px solid white" }}>
          <tbody>
            {users.length &&
              users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.company.name}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
