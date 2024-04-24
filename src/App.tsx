import { ToastContainer } from "react-toastify";
import RoutesApp from "./routes/navigation";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer autoClose={3000} />
      <RoutesApp />;
    </>
  );
}

export default App;
