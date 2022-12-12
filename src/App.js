import "./App.css";

import Onboarding1 from "./pages/splash_pages/Onboarding1";
import Onboarding2 from "./pages/splash_pages/Onboarding2";
import Onboarding3 from "./pages/splash_pages/Onboarding3";
import Roles from "./pages/splash_pages/Roles";
import Signup from "./pages/employer/signup/Signup";
import Login from "./pages/employer/login/Login";
import HomePage from "./pages/employer/home/Home";
import Message from "./pages/employer/message_and_notification/Message";
import Notification from "./pages/employer/message_and_notification/Notification";
import ServiceCategory from "./pages/employer/service_category/ServiceCategory";
import Agency from "./pages/employer/agencies/Agency";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LabHomePage from "./pages/laboratory/home/LabHomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Onboarding1 />}></Route>
          <Route path="/onboarding_2" element={<Onboarding2 />}></Route>
          <Route path="/onboarding_3" element={<Onboarding3 />}></Route>
          <Route path="/roles" element={<Roles />}></Route>
          <Route path="/employer/signup" element={<Signup />}></Route>
          <Route path="/employer/login" element={<Login />}></Route>
          <Route path="/employer/home" element={<HomePage />}></Route>
          <Route path="/employer/message" element={<Message />}></Route>
          <Route
            path="/employer/notification"
            element={<Notification />}
          ></Route>
          <Route path="/employer/agencies" element={<Agency />}></Route>
          <Route
            path="/employer/service_category"
            element={<ServiceCategory />}
          ></Route>
          <Route path="/laboratory/home" element={<LabHomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
