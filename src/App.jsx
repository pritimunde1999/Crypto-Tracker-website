import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import DashboardPage from "./pages/DashboardPage"
import WatchlistPage from "./pages/WatchlistPage"
import ComparePage from "./pages/ComparePage"
import CoinPage from "./pages/CoinPage"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {


  return (
    <div>
      <ToastContainer/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/coin/:id" element={<CoinPage/>}/>
        <Route path="/watchlist" element={<WatchlistPage />} />
        <Route path="/compare" element={<ComparePage />} />

      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
