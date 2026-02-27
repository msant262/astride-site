import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { NewsPage } from './pages/NewsPage';
import { LyricsPage } from './pages/LyricsPage';
import { ContactPage } from './pages/ContactPage';
import { ScrollToTopButton } from './components/ui/ScrollToTopButton';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/lyrics" element={<LyricsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <ScrollToTopButton />
    </Router>
  );
}

export default App;
