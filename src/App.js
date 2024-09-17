// import logo from './logo.svg';
import './App.css';
import { Route,Routes,Link, Navigate } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Contact from './Components/Contact';
import About from './Components/About';
// import ParentProp from './Components/Props/ParentProp';
import UseStateHook from './Components/Hook/UseStateHook';
import UseRefHook from './Components/Hook/UseRefHook';
import UseEffectHook from './Components/Hook/UseEffectHook';
// import Layout from './Components/Layout';
import UseContextparent from './Components/Context/UseContextParent';
import UseReduceHook from './Components/Hook/UseReduceHook';
import UseCallbackHook from './Components/Hook/UseCallbackHook';
import UseMemoHook from './Components/Hook/UseMemoHook';
import CRUD from './Components/API/CRUD';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import CustomHookDisp from './Components/Hook/Custom Hook/CustomHookDisp';



function App() {
  return (
    <div className="App">
      {/* <Home />*/}
      {/*<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus velit enim maxime quisquam atque laborum debitis, quibusdam fugiat pariatur reprehenderit dolore porro cumque, nobis veritatis magni voluptatem? Nesciunt, hic officiis?</p>*/}
      {/*<Login /> */}
      <div>
      {/* <Link to={'/home'} >Home</Link>
      <Link to={'/contact'} >Contact</Link>
      <Link to={'/about'} >About</Link>
    </div>
    <div> */}
      {/* <Routes>
        <Route path="" element={<Navigate to="/home"/>}/>
        <Route path="home" Component={Home}/>
        <Route path="Contact" Component={Contact} />
        <Route path="About" Component={About}/>
        <Route path="Browser" Component={Browser}/>
         </Routes> 
      </div> */}
      
       {/* Props */}
        {/* <ParentProp /> */}

        {/* Hooks */}
      {/* <UseStateHook></UseStateHook> */}
      {/* {<UseEffectHook/>} */}
      {/* {<UseRefHook/>} */}
      {/* {<UseContextparent/>} */}
       {/* <UseReduceHook/> */}
       {/* <UseCallbackHook/> */}
       {/* <UseMemoHook/> */}
    

    {/* <CRUD /> */}
        {/* <CustomHookDisp /> */}
        {/* Redux Counter App */}
    </div>
    </div>
  
  );
}
export default App;
