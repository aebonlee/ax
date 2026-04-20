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

// DX pages
const DXOverview = lazy(() => import('../pages/dx/DXOverview'));
const DXStrategy = lazy(() => import('../pages/dx/DXStrategy'));
const DXTech = lazy(() => import('../pages/dx/DXTech'));

// Other paths
const Trends = lazy(() => import('../pages/trends/Trends'));
const Cases = lazy(() => import('../pages/cases/Cases'));

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

            {/* DX */}
            <Route path="/dx-overview" element={<DXOverview />} />
            <Route path="/dx-strategy" element={<DXStrategy />} />
            <Route path="/dx-tech" element={<DXTech />} />

            {/* Trends & Cases */}
            <Route path="/trends" element={<Trends />} />
            <Route path="/cases" element={<Cases />} />

            <Route path="/admin" element={<AdminGuard><AdminDashboard /></AdminGuard>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
