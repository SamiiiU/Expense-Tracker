import React , {createContext , useReducer ,useState} from "react";
import Appreducer from './Appreducer';

//Initial state

const initialstate = {
    transactions : [
                { id: 1, text: 'Grocery', amount: -400 },
                { id: 2, text: 'Salary', amount: 20000 },
                { id: 3, text: 'Book', amount: -500 },
                { id: 4, text: 'Camera', amount: -2000 },

            ]
}

/// Create COntext

export const GlobalContext = createContext(initialstate);

// Create Context
export const ThemeContext = createContext();
//Provider Component

export const GlobalProvider = ({children}) => {
    const[state , dispatch ] = useReducer(Appreducer , initialstate);

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        if (isDarkMode) {
            document.body.style.backgroundColor = 'white';
        } else {
            document.body.style.backgroundColor = 'black';
        }
        setIsDarkMode(!isDarkMode);
    };

    //Actions 

    function Delete(id){
        dispatch({
            type : "DELETE",
            payload : id,
        });
    }

    function Add(transaction){
        dispatch({
            type : "ADD",
            payload : transaction,
        });

    }
    

    return (
        <GlobalContext.Provider value={{
            transactions : state.transactions,
            Delete ,
            Add ,
            
            }}>
            <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
                {children}
            </ThemeContext.Provider>
        </GlobalContext.Provider>

    );
}



