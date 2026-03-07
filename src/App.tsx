import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryProvider } from './app/providers/QueryProvider';
import { Header } from './widgets/Header';
import { Footer } from './widgets/Footer';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { ProductDetail } from './pages/ProductDetail';
import './shared/config/i18n';

function App() {
  return (
    <QueryProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </QueryProvider>
  );
}

export default App;
