import { Outlet } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
// import Navbar from './Navbar';
const Layout = () => {
  return (
    <div className="wrapper">
      <AuthProvider>
        {/* <Navbar /> */}
        <Outlet />
      </AuthProvider>
    </div>
  );
};
export default Layout;
