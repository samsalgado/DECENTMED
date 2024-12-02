import { useEffect, useState } from 'react';

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  // Fetch the users from the backend
  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await fetch("http://localhost:5001/users");
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
      }
    };

    fetchAgents();
  }, []); // Fetches data once when the component is mounted

  return [users, setUsers, loading];
};

export default useUsers;