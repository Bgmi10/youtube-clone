import './App.css';
import { Body } from './components/Body';
import { Header } from './components/Header';
import {Provider} from 'react-redux'
import appstore from './utils/appstore'

 function App() {
  return (
    <div >
      <Provider store={appstore}>
        <Header />
        <Body />
      </Provider>
    </div>
  );
}

export default App;
