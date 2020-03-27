import React, {useState} from 'react';

import Header from './Header';

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <Header title="Semana OmniStack" >
        Contador: {counter}
      </Header>
      <button onClick={()=>{setCounter(counter+1)}} >Incrementar</button>
    </>
  );
}

export default App;
