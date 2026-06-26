import About from "./About";
import Contactclass from "./Classcomponents/Contactclass";
import Homeclass from "./Classcomponents/homeclass";
import Greeting from "./Greeting";
import Home from "./Home";


function App() {
  let name = "Medha";
  let age = 21;
  return (
    <>
      <h1>Hello Everyone!</h1>
      <h3>Welcome to react!!!</h3>
      <Home />
      <Homeclass />
      <About />
      <Contactclass />
      <Greeting fn={name} age={age} favcolor="Crimson"/>
    </>
  )
}
export default App;