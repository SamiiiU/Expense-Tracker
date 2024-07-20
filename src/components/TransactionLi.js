import React , {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import { ThemeContext } from '../context/GlobalState';


const TransactionLi = () => {
  const {transactions} = useContext(GlobalContext);  
  
  const {Delete} = useContext(GlobalContext);
  
  const {isDarkMode} = useContext(ThemeContext);
  
  

  return (
    <div>
      <h3 className={(isDarkMode ? 'font-dark' : '')}>History</h3>
      <ul className=  {(isDarkMode ? 'list-dark' : 'list')}>
        
        {transactions.map(transactions => ( 
          
        <li className= {(transactions.amount >= 0 ? 'plus' : 'minus')}>    
          {transactions.text} <span>{(transactions.amount) >= 0 ? '+' : '-'}{Math.abs(transactions.amount)} PKR</span>
          <button onClick={() => {Delete(transactions.id) }  } class="delete-btn">x</button>
        </li>
        ))}
        
      </ul>
    </div>
    
  );
}

export default TransactionLi;
