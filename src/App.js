import './App.css';
import { MyImagecv } from './MyPersonalDoku';
import { LearnProgramm } from './LearnProgramm';
import { Contact } from './Contact';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { HeaderRouter } from './HeaderRouter';





const App = () => {
  return (
    <div 
    
    className="App">
    
    <BrowserRouter>
        <Routes>
            <Route>
                <Route path="/" element={<HeaderRouter />} />
                <Route path="/HeaderRouter" element={<HeaderRouter />} />
                <Route path="/LearnProgramm" element={<LearnProgramm />} />
                <Route path="/MyPersonalDoku" element={<MyImagecv />} />
                <Route path="/Contact" element={<Contact />} />
                
                

            </Route>
        </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
