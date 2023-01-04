
import React from 'react';
import './App.css';
import HomeNew from './home';

const HomePage = React.lazy(() => import("./home"))

function App() {
  const [comp, setComp] = React.useState("Before Load");
//   React.useEffect(function(){
// setTimeout(function(){
//   const loadHomeComp = async function(){
//     const resp = await import("./home");

//     setComp(resp.Home);
//   }
//   loadHomeComp();
// },2000)
//   },[])

const onBtnClick = function(){
  setComp( 
    <React.Suspense>
    <HomePage/>
    </React.Suspense>
  );
}
  return (
    <div className="App">
      Hello Titas
      <HomeNew/>
      <button onClick={onBtnClick}> Go to Home</button>
     <div>{comp}</div> 
    </div>
  );
}

export default App;
