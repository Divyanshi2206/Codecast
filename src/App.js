import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import EditorPage from './components/EditorPage';
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/editor/:roomId" element={<EditorPage/>}/>
     </Routes>
    
    </>
  );
}

export default App;
