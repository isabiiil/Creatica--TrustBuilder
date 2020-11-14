import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }
//   const realFileBtn= document.getElementById("real-file");
//   const customBtn= document.getElementById("custom-button");
//   const customTxt= document.getElementById("custom-text");
  
//   customBtn.addEventListener("click", function(){
//     realFileBtn.click();
//   });

//   realFileBtn.addEventListener("change", function(){
//     if (realFileBtn.value){
//       customTxt.innerHTML=realFileBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
//     } else{
//       customTxt.innerHTML="No file chosen, yet.";
//     }
  
//   });
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >yeet <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}