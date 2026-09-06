import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../services/apiService";

function Payment() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [payment, setPayment] = useState({
    amount: "",
    paymentMethod: "UPI"
  });

  const handlePayment = async () => {
    const res = await API.post("/payments", {
      amount: Number(payment.amount),
      paymentMethod: payment.paymentMethod,
      booking: { id: Number(id) }
    });

    alert(res.data);
    navigate("/mybookings");
  };

  return (
    <div className="login-container">
      <h2>Payment</h2>

      <input
        type="number"
        placeholder="Amount"
        onChange={(e) =>
          setPayment({ ...payment, amount: e.target.value })
        }
      />

      <select
        onChange={(e) =>
          setPayment({ ...payment, paymentMethod: e.target.value })
        }
      >
        <option>UPI</option>
        <option>Card</option>
        <option>Cash</option>
      </select>

      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
}

export default Payment;