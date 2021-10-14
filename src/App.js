
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Booking from './Pages/Booking/Booking';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Share/Header/Header';
import AuthProvider from './Contexts/AuthProvider';
function App() {
  return (
    <div className="App">
      <AuthProvider>
     <Router>
       <Header/>
       <Switch>
         <Route exact path="/">
           <Home></Home>
         </Route>
         <Route path="/home">
           <Home></Home>
         </Route>
         <Route path="/booking/:bookinID">
           <Booking></Booking>
         </Route>
         <Route path="/login">
           <Login></Login>
         </Route>
         <Route path="*">
           <NotFound></NotFound>
         </Route>
       </Switch>
     </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
