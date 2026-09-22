import { Outlet } from "react-router";
import Navbar from "./Navbar/Navbar";
import { Suspense } from "react";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        
        <Suspense
          fallback={
            <div className="h-[60vh] flex items-center justify-center">
              <span className="loading loading-bars loading-xl"></span>
            </div>
          }
        >
          <Outlet />
        </Suspense>
     
      </main>
    </>
  );
};

export default RootLayout;
