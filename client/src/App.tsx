import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import { SearchProvider } from "./contexts/SearchContext";

function App() {
  return (
    <Router>
      <SearchProvider>
        <Routes>
          <Route element={<Header />}>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </SearchProvider>
    </Router>
  );
}

export default App;
