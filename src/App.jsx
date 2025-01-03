import React, { Suspense, useEffect, useState } from "react";
import ROUTES, { HIDE_NAVBAR_ROUTES } from "./utils/router";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  const location = useLocation();
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    setShowNav(!HIDE_NAVBAR_ROUTES.has(location?.pathname));
  }, [location.pathname]);
  return (
    // <>

    //   <Dashboard />
    //   <ProfilePage />
    //   <UpdateForm />
    //   <AdminDashboard />
    // </>
    <Suspense fallback={"...Loading"}>
      {showNav && <Navbar />}
      <Routes>
        {ROUTES.map(({ path, element: Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
      </Routes>
    </Suspense>
  );
}

export default App;
