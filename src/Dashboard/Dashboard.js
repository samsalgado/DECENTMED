
import usePaymentHistory from "../Hooks/usePaymentHistory";
import PaymentDetails from "./PaymentDetails";
import '../App.css';
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [paymentData, refetch] = usePaymentHistory();
  const navigate = useNavigate();
console.log(paymentData,'dahsborad');
  const handleBackHome = () => {
    navigate('/'); // Replace '/' with your home route
  };

  return (
    <div className="table">
      <h1>Payments Dashboard</h1>
      <button className="close-icon" onClick={handleBackHome}>
        ✕
      </button>
      {
        paymentData?.length === 0 ? (
          <p>No payments yet.</p>
        ) : (
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="border px-4 py-2">No</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Medical Name</th>
                <th className="border px-4 py-2">BitcoinAddress</th>
                <th className="border px-4 py-2">$Amount</th>
                <th className="border px-4 py-2">Status</th>
                <th className="border px-4 py-2">Approved</th>
                <th className="border px-4 py-2">Deny</th>
                <th className="border px-4 py-2">Created At</th>
              </tr>
            </thead>
            <tbody>
              {paymentData?.map((payments, index) => <PaymentDetails

                key={payments._id}
                payments={payments}
                index={index}
                refetch={refetch}
              ></PaymentDetails>
              )}
            </tbody>
          </table>
        )
      }
    </div >
  );
};

export default Dashboard;