import './App.css';
import { MyImagecv } from './MyPersonalDoku';
import { LearnProgramm } from './LearnProgramm';
import { Contact } from './Contact';
import { Route, Routes } from 'react-router-dom';
import { HeaderRouter } from './HeaderRouter';
import { HashRouter as Router } from "react-router-dom";






const App = () => {
  return (
    <div 
    
    className="App">
    
    
        <Router>
            <Routes>
            <Route>
                <Route path="/" element={<HeaderRouter />} />
                <Route path="/HeaderRouter" element={<HeaderRouter />} />
                <Route path="/LearnProgramm" element={<LearnProgramm />} />
                <Route path="/MyPersonalDoku" element={<MyImagecv />} />
                <Route path="/Contact" element={<Contact />} />
                </Route>
                </Routes>

            
        </Router>
    
      
    </div>
  );
}

export default App;
