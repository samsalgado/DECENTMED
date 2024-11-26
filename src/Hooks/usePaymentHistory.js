
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../pages/Providers/AuthProvider';


const usePaymentHistory = () => {
  const { loading } = useContext(AuthContext)

  const { data: paymentData, refetch = [], } = useQuery({
    queryKey: ['paymentData'],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(`https://decentmed-server.vercel.app/payments-history`);
      return res.json();
    },
  })
  return [paymentData, refetch]
};

export default usePaymentHistory;