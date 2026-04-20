import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AdminGuard from '../components/AdminGuard';
import type { ReactElement } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const ForgotPassword = lazy(() => import('../pages/ForgotPassword'));
const MyPage = lazy(() => import('../pages/MyPage'));

// AX pages
const AXOverview = lazy(() => import('../pages/ax/AXOverview'));
const AXStrategy = lazy(() => import('../pages/ax/AXStrategy'));
const AXTools = lazy(() => import('../pages/ax/AXTools'));
const AXCases = lazy(() => import('../pages/ax/AXCases'));

// DX pages
const DXOverview = lazy(() => import('../pages/dx/DXOverview'));
const DXStrategy = lazy(() => import('../pages/dx/DXStrategy'));
const DXTech = lazy(() => import('../pages/dx/DXTech'));
const DXCases = lazy(() => import('../pages/dx/DXCases'));

// Trends
const Trends = lazy(() => import('../pages/trends/Trends'));
const TrendsDX = lazy(() => import('../pages/trends/TrendsDX'));
const TrendsIndustry = lazy(() => import('../pages/trends/TrendsIndustry'));

// Cases
const Cases = lazy(() => import('../pages/cases/Cases'));
const CasesGlobal = lazy(() => import('../pages/cases/CasesGlobal'));
const CasesKorea = lazy(() => import('../pages/cases/CasesKorea'));

const AdminDashboard = lazy(() => import('../pages/admin/AdminDashboard'));
const NotFound = lazy(() => import('../pages/NotFound'));

function LoadingFallback(): ReactElement {
  return (
    <div className="loading-page">
      <div className="loading-spinner" />
    </div>
  );
}

export default function PublicLayout(): ReactElement {
  return (
    <div className="site-wrapper">
      <Navbar />
      <main className="site-main">
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/mypage" element={<MyPage />} />

            {/* AX */}
            <Route path="/ax-overview" element={<AXOverview />} />
            <Route path="/ax-strategy" element={<AXStrategy />} />
            <Route path="/ax-tools" element={<AXTools />} />
            <Route path="/ax-cases" element={<AXCases />} />

            {/* DX */}
            <Route path="/dx-overview" element={<DXOverview />} />
            <Route path="/dx-strategy" element={<DXStrategy />} />
            <Route path="/dx-tech" element={<DXTech />} />
            <Route path="/dx-cases" element={<DXCases />} />

            {/* Trends */}
            <Route path="/trends" element={<Trends />} />
            <Route path="/trends-dx" element={<TrendsDX />} />
            <Route path="/trends-industry" element={<TrendsIndustry />} />

            {/* Cases */}
            <Route path="/cases" element={<Cases />} />
            <Route path="/cases-global" element={<CasesGlobal />} />
            <Route path="/cases-korea" element={<CasesKorea />} />

            <Route path="/admin" element={<AdminGuard><AdminDashboard /></AdminGuard>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
