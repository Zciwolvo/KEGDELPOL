import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Desktop from "./pages/Desktop";
import EmployeeUi from "./pages/Desktop1";
import AssignDriver from "./pages/AssignDriver";
import UpdateUser from "./pages/UpdateUser";
import ClientUI from "./pages/Desktop2";
import DriverUI from "./pages/DriverUI";
import AssignDriver1 from "./pages/AssignDriver1";
import Klient from "./pages/Klient";
import Pracownik from "./pages/Pracownik";
import Kierowca from "./pages/Kierowca";
import ReadDBTable from "./pages/ReadDBTable";
import UpdateUser1 from "./pages/UpdateUser1";
import AddNewVehicle from "./pages/AddNewVehicle";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/employee-ui":
        title = "";
        metaDescription = "";
        break;
      case "/assign-driver":
        title = "";
        metaDescription = "";
        break;
      case "/update-user":
        title = "";
        metaDescription = "";
        break;
      case "/client-ui":
        title = "";
        metaDescription = "";
        break;
      case "/driver-ui":
        title = "";
        metaDescription = "";
        break;
      case "/assign-driver1":
        title = "";
        metaDescription = "";
        break;
      case "/klient":
        title = "";
        metaDescription = "";
        break;
      case "/pracownik":
        title = "";
        metaDescription = "";
        break;
      case "/kierowca":
        title = "";
        metaDescription = "";
        break;
      case "/read-db-table":
        title = "";
        metaDescription = "";
        break;
      case "/update-user1":
        title = "";
        metaDescription = "";
        break;
      case "/add-new-vehicle":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Desktop />} />
      <Route path="/employee-ui" element={<EmployeeUi />} />
      <Route path="/assign-driver" element={<AssignDriver />} />
      <Route path="/update-user" element={<UpdateUser />} />
      <Route path="/client-ui" element={<ClientUI />} />
      <Route path="/driver-ui" element={<DriverUI />} />
      <Route path="/assign-driver1" element={<AssignDriver1 />} />
      <Route path="/klient" element={<Klient />} />
      <Route path="/pracownik" element={<Pracownik />} />
      <Route path="/kierowca" element={<Kierowca />} />
      <Route path="/read-db-table" element={<ReadDBTable />} />
      <Route path="/update-user1" element={<UpdateUser1 />} />
      <Route path="/add-new-vehicle" element={<AddNewVehicle />} />
    </Routes>
  );
}
export default App;
