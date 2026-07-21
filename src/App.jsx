import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";

export default function App({ children }) {
  return (
    <>
      <Navbar />

      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <div className="col-12 col-md-9 col-lg-10 p-4">{children}</div>
        </div>
      </div>

      <div className="ps-footer">
        ELS Justice Platform · Police Station Portal · © 2026
      </div>
    </>
  );
}
