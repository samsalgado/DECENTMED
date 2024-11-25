import { useState, useEffect, useContext } from 'react';
import useUsers from './useUsers';
import { AuthContext } from '../pages/Providers/AuthProvider';


const useAdmin = () => {
const {user,loading} = useContext(AuthContext);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);
  const [users] = useUsers(); // Assuming this fetches all users from MongoDB

  useEffect(() => {
    // Only proceed if user and users data is available
    if (!loading && user ) {
      setIsAdminLoading(true); // Set loading state to true while checking
      const currentUser = users.find((u) => u.email === user?.email  && u.role === "admin");
      setIsAdminLoading(false)
      setIsAdmin(!!currentUser); 
      setIsAdminLoading(false); 
    }
  }, [user, users, loading]);

  return [isAdmin, isAdminLoading];
};

export default useAdmin;
