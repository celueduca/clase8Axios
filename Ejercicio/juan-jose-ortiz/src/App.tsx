import { BrowserRouter , Route } from "react-router-dom";

import Characters from "./pages/Characters";
import Episodes from "./pages/Episodes";
import Locations from "./pages/Locations";

const App = () => {
  return (
   <>
    <BrowserRouter>
      <Route exact  path="/characters" component={Characters}/>
      <Route exact  path="/locations" component={Locations}/>
      <Route exact  path="/episodes" component={Episodes}/>
    </BrowserRouter>
    
   </>
  );
}

export default App;
