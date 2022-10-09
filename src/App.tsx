import { ReactNode } from 'react';
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
};

// NOTE: providers
const AppProvider = ({ children }: { children: ReactNode }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

// NOTE: routes
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

// NOTE: components
const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        width: '720px',
        margin: '0 auto',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      <div style={{ display: 'flex', gap: '8px' }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <div>{children}</div>
    </div>
  );
};

// NOTE: features
const Home = () => {
  return (
    <AppLayout>
      <div>Home</div>
    </AppLayout>
  );
};

const About = () => {
  return (
    <AppLayout>
      <div>About</div>
    </AppLayout>
  );
};
