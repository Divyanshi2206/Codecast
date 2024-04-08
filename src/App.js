import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import EditorPage from './components/EditorPage';
import {Routes,Route} from "react-router-dom"
import {Toaster} from "react-hot-toast"
function App() {
  return (
    <>
    <Toaster position='top-center'/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/editor/:roomId" element={<EditorPage/>}/>
     </Routes>
    
    </>
  );
}

export default App;
