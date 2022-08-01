import './App.css';
import Home from "./Container/Home/Home";
import {Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="Container">
        <Switch>
           <Route path="/" exact component={Home}/>
           <Route render={()=> <h1>Not Found</h1>}/>
        </Switch>

    </div>
  );
}

export default App;
