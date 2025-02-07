import Swal from "sweetalert2";
const PaymentDetails = ({ payments, index, refetch }) => {
  const { bitcoinAddress, price, email, practice, status, date, } = payments;
  // pending user approve function
  const handleStatus = (payments, status) => {

    fetch(
      `http://localhost:5001/payments-history/${payments._id}/?status=${status}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {

        if (data.modifiedCount > 0) {
          refetch()
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Status Update Successfully",
            showConfirmButton: "false",
            timer: 1500,
          });
        }
      });
  };


  return (
    <>
      <tr>
        <th className="border px-4 py-2"> {index + 1}</th>
        <td className="border px-4 py-2">{email}</td>
        <td className="border px-4 py-2">{practice}</td>
       
        <td className="border px-4 py-2" style={{ wordWrap: 'break-word', wordBreak: 'break-all' }}>{bitcoinAddress || 'Stripe Pay'}</td>
        <td className="border px-4 py-2">${price}</td>
        <td className="border px-4 py-2">
          {status === 'approved' ?
            <> <p style={{ color: 'green', fontSize: 'bold', }} >{status}</p> </> :
            <> <p style={{ color: 'red', fontSize: 'bold', }}>{status}</p></>
          }
          {" "}
        </td>
        {
          <>
            {" "}
            <td className="border px-4 py-2">
              <button
                // disabled={status === "deny" || status === "approved"}
                onClick={() => handleStatus(payments, "approved")}
                className="btn btn-primary btn-sm hover:bg-orange-600"
              >
                Approve
              </button>
            </td>
            <td className="border px-4 py-2">
              <button
                // disabled={status === "deny" || status === "approved"}
                onClick={() => handleStatus(payments, "deny")}
                className="btn btn-primary btn-sm hover:bg-orange-500"
              >
                Deny
              </button>
            </td>{" "}
          </>
        }
        <td className="border px-4 py-2">{new Date(date).toLocaleString()}</td>
      </tr>

    </>
  );
};

export default PaymentDetails;