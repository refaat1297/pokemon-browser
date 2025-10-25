import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import PaginationView from "./pages/PaginationView.tsx";
import LoadMoreView from "./pages/LoadMoreView.tsx";
import PokemonDetails from "./pages/PokemonDetails.tsx";
import NotFound from "./pages/NotFound.tsx";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/pagination" replace />} />
        <Route path="/pagination" element={<PaginationView />} />
        <Route path="/load-more" element={<LoadMoreView />} />
        <Route path="/pokemon/:id" element={<PokemonDetails />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
