import './App.css';
import ThemeToggle from './components/ThemeToggle';
import Timer from './components/Timer';
import UseStatePractice from './components/UseStatePractice';
import TwFive from './components/TwFive';
import UseContextExample from './components/UseContextExample';
import UseReducerCount from './components/useReducerCount';
import NewApp from './useReducer/App';
import CustomeHook from './CustomeHooks/App'

function App() {
  
  return (
<>
    { /*<ThemeToggle/>
    <Timer/>
    <UseStatePractice/>
    <TwFive/>
    <UseContextExample/>
    <UseReducerCount/>*/}
    <NewApp/>
    <CustomeHook/>

    </>
  );
}

export default App;
