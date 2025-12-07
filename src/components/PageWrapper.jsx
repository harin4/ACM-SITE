import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const PageWrapper = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onMenuClick={() => setSidebarOpen(true)} />

      <main className="flex-1 pt-16">{children}</main>

      <Footer />   
    </div>
  );
};

export default PageWrapper;
