import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
//routers
import Home from './routes/Home'
import Game from './routes/Game';

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Home />} />
          <Route path="/game/:id" element={<Game />} />
          <Route
            path="*"
            element={
              <p>
                NO FOUND
              </p>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
);


