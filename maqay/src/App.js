import "./App.css";
import Route from "./Router/Router.js";

console.log(process.env.REACT_APP_GOOGLE_API_KEY);
function App() {
  return (
    <div className='App'>
      <Route />
    </div>
  );
}

export default App;
