import { BrowserRouter, Routes,Route } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import BodyPage from "./components/BodyPage";
import SearchPage from "./components/SearchPage";
import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BodyPage/>}/>
        <Route path="*" element={<ErrorPage/>}/>
        <Route path="/search" element={<SearchPage/>}/>
        <Route path="/signin" element={<SignInPage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
