import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../shared/header/Header";
import Footer from "../shared/footer/Footer";
import Loading from "../shared/loading/Loading";

function Layout() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
}

export default Layout;
