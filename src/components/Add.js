import React , {useContext ,useState} from 'react'
import { GlobalContext } from '../context/GlobalState';
import { ThemeContext } from '../context/GlobalState';

const Add = () => {
    const [text , setText] = useState('');
    const [amount , setAmount] = useState(0);
    const {transactions , dispatch} = useContext(GlobalContext);  

    const {Add} = useContext(GlobalContext);

    const amounts = transactions.map(transactions => transactions.amount);

    const {isDarkMode} = useContext(ThemeContext);

    const onSubmit = e => {
      e.preventDefault();

      const newTransaction = {
        id : amounts.length + 1,
        text,
        amount : +amount,
      }

      Add(newTransaction);

      console.log('Add function:', Add, 'Transactions:', transactions);
      console.log('Added Transaction:', newTransaction);
    }

    
  return (
    <>
    <h3 className={(isDarkMode ? 'font-dark' : '')}>Add new transaction</h3>
    <form id="form" onSubmit={onSubmit}>
        <div className="form-control">
          <label className={(isDarkMode ? 'font-dark' : '')}>Enter Text</label>
          <input type="text" className={isDarkMode ? 'dark-input' : ''} value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..."  required/>
        </div>
        <div class="form-control">
          <label className={(isDarkMode ? 'font-dark' : '')}>Enter Amount</label>
          <input type="number" className={isDarkMode ? 'dark-input' : ''}  value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." required/>
        </div>
        <button class="btn">Add transaction</button>
    </form>
    </>
  );
}

export default Add
