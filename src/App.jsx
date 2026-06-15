import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import CookieConsent from "./components/CookieConsent";
import SmoothScrollProvider from "./components/SmoothScrollProvider";
import ProtectedRoute from "./components/admin/ProtectedRoute";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import PricesPage from "./pages/PricesPage";
import AboutPage from "./pages/AboutPage";
import ContactsPage from "./pages/ContactsPage";
import PortfolioPage from "./pages/PortfolioPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/admin/LoginPage";
import Dashboard from "./pages/admin/Dashboard";
import ServicesManager from "./pages/admin/ServicesManager";
import BlogManager from "./pages/admin/BlogManager";
import ReviewsManager from "./pages/admin/ReviewsManager";
import PortfolioManager from "./pages/admin/PortfolioManager";
import PriceManager from "./pages/admin/PriceManager";
import LeadsManager from "./pages/admin/LeadsManager";

function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-dark text-white font-sans antialiased">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/prices" element={<PricesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <FloatingButtons />
      <CookieConsent />
    </div>
  );
}

export default function App() {
  return (
    <SmoothScrollProvider>
      <Routes>
        <Route path="/admin/login" element={<LoginPage />} />
        <Route path="/admin" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/admin/services" element={<ProtectedRoute><ServicesManager /></ProtectedRoute>} />
        <Route path="/admin/blog" element={<ProtectedRoute><BlogManager /></ProtectedRoute>} />
        <Route path="/admin/reviews" element={<ProtectedRoute><ReviewsManager /></ProtectedRoute>} />
        <Route path="/admin/portfolio" element={<ProtectedRoute><PortfolioManager /></ProtectedRoute>} />
        <Route path="/admin/prices" element={<ProtectedRoute><PriceManager /></ProtectedRoute>} />
        <Route path="/admin/leads" element={<ProtectedRoute><LeadsManager /></ProtectedRoute>} />
        <Route path="/*" element={<PublicLayout />} />
      </Routes>
    </SmoothScrollProvider>
  );
}
