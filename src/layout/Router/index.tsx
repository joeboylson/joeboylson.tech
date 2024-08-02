import Profile from "../../pages/Profile";
import Projects from "../../pages/Projects";

export default function Router() {
  const path = window.location.pathname;

  switch (path) {
    case "/profile":
      return <Profile />;

    case "/projects":
      return <Projects />;

    default:
      window.location.href = "/profile";
      return <span />;
  }
}
