import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';

// Page imports
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Solutions from './pages/Solutions';
import Enterprise from './pages/solutions/Enterprise';
import StaffingFirms from './pages/solutions/StaffingFirms';
import MspVms from './pages/solutions/MspVms';
import Rpo from './pages/solutions/Rpo';
import Government from './pages/solutions/Government';
import Startups from './pages/solutions/Startups';
import ScrollToTop from './components/ScrollToTop';


const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-[#E2E8F0] border-t-[#0058A0] rounded-full animate-spin"></div>
          <span className="text-sm text-slate-400 font-medium">Loading Joblynk...</span>
        </div>
      </div>
    );
  }

  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      navigateToLogin();
      return null;
    }
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/solutions" element={<Solutions />} />
      <Route path="/solutions/enterprise" element={<Enterprise />} />
      <Route path="/solutions/staffing-firms" element={<StaffingFirms />} />
      <Route path="/solutions/msp-vms" element={<MspVms />} />
      <Route path="/solutions/rpo" element={<Rpo />} />
      <Route path="/solutions/government" element={<Government />} />
      <Route path="/solutions/startups" element={<Startups />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <ScrollToTop />
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;