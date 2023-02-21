import { Outlet } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';

const Layout = () => (
  <div className="wrapper">
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  </div>
);
export default Layout;
