import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Page1 from './page/page1';
import Page2 from './page/page2';
import Page3 from './page/page3';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Page1/>}/>
        <Route path='/p2' element={<Page2/>}/>
        <Route path='/p3' element={<Page3/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;