import React, {createContext, useReducer} from "react";
import reducer from "./reducer";
import img1 from "../images/computer.jpg";

export const initialState = {
  basket: []
}


export const StateContext = createContext();


function StateProvider({children}) {
    const [state, dispatch] = useReducer(reducer, initialState);
    
  
  return (
    <StateContext.Provider value = {{initialState: state.initialState, dispatch}}>
      {children}
    </StateContext.Provider>
  );
}

// this is how we can use it inside other components

export default StateProvider;

// export const useStateValue = () => useContext(StateContext);