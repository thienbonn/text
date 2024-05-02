import {BrowserRouter as Router,  Route, Routes} from "react-router-dom";
import { publicRouter } from "./Router";

import Home from "./Pgae/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {publicRouter.map((router,index)=>{
            const Page =  router.component || Home
            return(
              <Route key={index} path={router.path} element={<Page/>}/>
            )
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
