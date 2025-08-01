import './App.css';
import ThemeToggle from './components/ThemeToggle';
import Timer from './components/Timer';
import UseStatePractice from './components/UseStatePractice';
import TwFive from './components/TwFive';
import UseContextExample from './components/UseContextExample';
import UseReducerCount from './components/useReducerCount';
import NewApp from './useReducer/App';
import CustomeHook from './CustomeHooks/App'
import UseMemo from './UseMemo/App';
import UseCallback  from './UseCallback/App';
import Redux from './Redux/App.jsx';
import {Provider} from 'react-redux'
import {store} from './Redux/store.js'
import Temp from './Practice/Temp.jsx';

function App() {
  
  return (
<>
    { /*<ThemeToggle/>
    <Timer/>
    <UseStatePractice/>
    <TwFive/>
    <UseContextExample/>
    <UseReducerCount/>
    <NewApp/>
    <CustomeHook/>
      <UseMemo/>
      <UseCallback /> 
      <Provider store={store}>
        <Redux />
      </Provider>*/}
      <Temp />
    </>
  );
}

export default App;
