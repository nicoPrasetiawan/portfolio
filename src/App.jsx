import Header from "./components/Header/Header.jsx";

import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";
import nico from "./assets/nico.png";

// {
//   alert("This website is still under construction");
// }
function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;
