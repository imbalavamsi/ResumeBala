import {
  isRouteErrorResponse,
  Outlet,
  ScrollRestoration,
  useRouteError,
} from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";

export const RootLayout: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className='mt-6'>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export const RootErrorElement: React.FC = () => {
  const err = useRouteError();
  return (
    <div>
      {isRouteErrorResponse(err) ? <h1>Error</h1> : <h1>Something Went</h1>}
    </div>
  );
};
