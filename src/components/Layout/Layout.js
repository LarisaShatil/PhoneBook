import React, { Suspense } from "react";
import { Toaster } from 'react-hot-toast';
import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};