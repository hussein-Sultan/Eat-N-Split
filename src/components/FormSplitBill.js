import { useState } from "react";
import Button from "./Button";

export default function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [userExpense, setUserExpense] = useState("");
  const friendExpense = bill ? bill - userExpense : ""; // dervied state
  const [whoIsPaying, setWhoIsPaying] = useState("user"); // The Bill By Default is Paying By User

  function handleSplitBill(e) {
    e.preventDefault();

    if (!bill || !userExpense) return;

    onSplitBill(whoIsPaying === "user" ? friendExpense : -1 * userExpense);

    setBill("");
    setUserExpense("");
    setWhoIsPaying("user");
  }

  return (
    <form className="form-split-bill">
      <h2>split a bill with {selectedFriend.name}</h2>

      <label htmlFor="bill-value">💰Bill Value</label>
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
        id="bill-value"
      />

      <label htmlFor="user-expense">🧍🏼Your Expense</label>
      <input
        type="number"
        value={userExpense}
        onChange={(e) =>
          setUserExpense(
            Number(e.target.value) > bill ? userExpense : Number(e.target.value)
          )
        }
        id="user-expense"
      />

      <label>{`🧑‍🤝‍🧑${selectedFriend.name}'s Expense`}</label>
      <input type="text" value={friendExpense} disabled />

      <label htmlFor="who-paying">🤑Who is paying the bill?</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option className="bg-[#fff4e6]" value="user">
          You
        </option>
        <option className="bg-[#fff4e6]" value="friend">
          {selectedFriend.name}
        </option>
      </select>

      <Button onAction={handleSplitBill}>Split Bill</Button>
    </form>
  );
}
