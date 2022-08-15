import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }: any) => {
  const isAuth = localStorage.getItem('access_token');
  return isAuth ? children : <Navigate to="/" />;
};

export default PrivateRoute;
