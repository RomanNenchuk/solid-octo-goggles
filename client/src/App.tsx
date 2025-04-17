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
import { BookingProvider } from "./contexts/BookingContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Toast />
      <Router>
        <SearchProvider>
          <Routes>
            <Route element={<Header />}>
              <Route path="/" element={<Home />} />
              <Route
                path="/bookings/:id"
                element={
                  <BookingProvider>
                    <Booking />
                  </BookingProvider>
                }
              />
              <Route path="/movies/:id" element={<Movie />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </SearchProvider>
      </Router>
    </>
  );
}

function Toast() {
  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      hideProgressBar
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      style={{ zIndex: 10000 }}
    />
  );
}

export default App;
