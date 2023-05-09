import { useState } from "react";
import Context from "./Component/Context";
import Child0 from "./Component/Child0";


function App() {
  const [data,setData] = useState(false);
  return (
   <>
   <Context.Provider value={data}>
    <button onClick={()=>setData(!data)}>Click Me</button>
    <Child0/>
    {/* <Child2/> */}

   </Context.Provider>
   </>
  );
}

export default App;
