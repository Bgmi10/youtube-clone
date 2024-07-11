import './App.css';
import { Body } from './components/Body';
import { Header } from './components/Header';
import {Provider} from 'react-redux'
import appstore from './utils/appstore'
import { BrowserRouter as Router ,Route, Routes } from 'react-router-dom';
import { Detailpage } from './components/Detailpage';



 function App() {
  return (
    <div >
      <Provider store={appstore}>
        <Header />
        <Router >
          <Routes>
            <Route path='/detailpage/:id' element={<Detailpage />} />
            <Route path='/' element={<Body />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
