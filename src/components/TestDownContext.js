import React, { createContext, useState } from 'react';

export const TestDownContext = createContext();

function TestDownContextProvider(props) {
  const [services] = useState(
    [
      {title: "Amazon Music", id: 1},
      {title: "E-crammer and books", id: 2},
      {title: "Boys Wears", id: 3},
      {title: "girls wears", id: 4},
      {title: "Art and designs", id: 5}
  ])
  
  const [departments] = useState(
    [
        {title: "Electronics", id: 1},
        {title: "Computers and accesories", id: 2},
        {title: "Smart phones and Acessories", id: 3},
        {title: "Recreation", id: 4},
        {title: "Travel and Tour", id: 5}
  ])
  
  return (
    <TestDownContext.Provider value={{services, departments}}>
     {props.children}
    </TestDownContext.Provider>
  );
}

export default TestDownContextProvider;

