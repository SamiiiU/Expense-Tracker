import React  from "react";

import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExp from "./components/Income-Exp";
import TransactionLi from "./components/TransactionLi";
import Add from "./components/Add";
import {GlobalProvider} from '../src/context/GlobalState';





import './Tracker.css';

const Tracker = () => {
    

    return(
        <div > 
        <GlobalProvider >
            
            <Header />
            <div className="container">    
            
            
                <Balance />
                <IncomeExp />
                <TransactionLi />
                <Add />
                
            </div>
            


        </GlobalProvider>

        </div>
    );
}


export default Tracker;
