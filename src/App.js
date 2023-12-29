import "./index.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import Watchlist from "./components/Watchlist";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Banner />
                  <Movies />
                </>
              }
            />

            <Route path="/watchlist" element={<Watchlist />} />

          </Routes>
        </main>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
