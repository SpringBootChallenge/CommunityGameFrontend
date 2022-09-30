import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import './App.css';
import GamesList from './components/Games/GamesList/GamesList';
import { AuthProvider, RequireAuth } from "./hooks/useAuth";
import GameView from './views/Games/GameView';
import Login from './views/Login/Login';


function App() {
  const game = {
    "id": "bc24d911-df5d-48aa-be90-809e1ecd9e3a",
    "title": "Insecters War for PlayStation",
    "platform": "PlayStation",
    "releaseDate": "2030-01-01",
    "description": "This is the description of the video game.",
    "genre": "Arcade",
    "image": "https://media.rawg.io/media/screenshots/32b/32bf977b2e13dacef4aa7f6de6b22452.jpg",
    "updatedAt": "2022-09-26T09:31:26",
    "backlogCount": 0,
    "playingCount": 0,
    "beatCount": 0,
    "retiredCount": 0,
    "updatedBy": null
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col">

          <AuthProvider>
            <BrowserRouter>
              <Routes>
                <Route path={'/login'} element={<Login />} />
                <Route path={'/signup'} element={<div></div>} />
                <Route
                  path={'/games'}
                  element={
                    <RequireAuth>
                      <div>Games</div>
                    </RequireAuth>
                  } />
                <Route path={'/games/:gameId'} element={
                  <RequireAuth>
                    <GameView game={game} />
                  </RequireAuth>
                } />
              </Routes>
            </BrowserRouter>
          </AuthProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
