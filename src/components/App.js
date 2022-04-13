import './App.scss';
import {Routes,Route,Redirect} from "react-router-dom";
import Workspace from '../pages/Workspace';

/**
 * This is the function getting rendered inside the root component of App.
 */
function App() {
  return (
    <Routes>
      <Route path="/" element={<Workspace/>} >
      </Route>
    </Routes>
  );
}

export default App;
