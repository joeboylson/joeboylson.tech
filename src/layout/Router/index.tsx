import { Routes, Route, Navigate } from "react-router-dom";
import { Routes as AppRoutes } from "../../constants";
import Experience from "../../pages/Experience";
import Profile from "../../pages/Profile";
import Projects from "../../pages/Projects";

export default function Router() {
  return (
    <Routes>
      <Route path={AppRoutes.PROFILE} element={<Profile />} />
      <Route path={AppRoutes.PROJECTS} element={<Projects />} />
      <Route path={AppRoutes.EXPERIENCE} element={<Experience />} />
      <Route path="*" element={<Navigate to={AppRoutes.PROFILE} replace />} />
    </Routes>
  );
}
