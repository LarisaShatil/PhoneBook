import React, { lazy, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { authSelectors } from "./redux/auth";
import { Spinner } from "./components/Spinner/Spinner";
import authOperations from './redux/auth/auth-operations'
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

const HomeView = lazy(() => import('./views/HomeView'));
const LoginView = lazy(() => import('./views/LoginView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const ContactsView = lazy(() => import('./views/ContactsView'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshingUser = useSelector(authSelectors.getIsRefreshingUser)

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return isRefreshingUser ? (<Spinner />)
    : (
   <Routes>
          <Route exact path="/" element={<Layout />}>
            <Route index element={<HomeView />} />
            <Route path="/register" element={
              <PublicRoute
                restricted
                redirectTo="/contacts"
                component={<RegisterView />}
              />} />
            <Route path="/login" element={
              <PublicRoute
                restricted
                redirectTo="/contacts"
                component={<LoginView />}
              />
            } />
            <Route path="/contacts" element={
              <PrivateRoute redirectTo="/login" component={<ContactsView />} />
            } />
          </Route>
        </Routes>
    )
};

export default App;