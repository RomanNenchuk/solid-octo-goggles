import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import { SearchProvider } from "./contexts/SearchContext";
import Booking from "./pages/Booking";
import Movie from "./pages/Movie";

function App() {
  return (
    <Router>
      <SearchProvider>
        <Routes>
          <Route element={<Header />}>
            <Route path="/" element={<Home />} />
            <Route path="/bookings/:id" element={<Booking />} />
            <Route path="/movies/:id" element={<Movie />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </SearchProvider>
    </Router>
  );
}

export default App;
