import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import LoadingIndicator from "./LoadingIndicator";
import ErrorDisplay from "./ErrorDisplay";
import UserList from "./UserList";

function App() {
  // manage different states of the app by using useState hook
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // async function to fetch user data from API
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUser(data);
      } catch (error) {
        setError(true);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);
  return (
    <>
      <Header />
      <div id="main">
        {/* conditional rendering, if loading is true then show loading indicator */}
        {loading && <LoadingIndicator />}
        {/* conditional rendering, if error is true then show error display */}
        {error && <ErrorDisplay />}
        {/* conditional rendering, if loading and error are false then show user list */}
        {!loading && !error && <UserList users={user} />}
      </div>
    </>
  );
}

export default App;
