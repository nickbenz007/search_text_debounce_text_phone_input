import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchText from "./pages/SearchText";
import { SearchDebounce } from "./pages/SearchDebounce";
import { FinalPhoneInput } from "./pages/PhoneInput";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" Component={SearchText} />
        <Route path="/SearchDebounce" Component={SearchDebounce} />
        <Route path="/FinalPhoneInput" Component={FinalPhoneInput} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
