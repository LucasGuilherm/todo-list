import { Route, Routes } from "react-router-dom";
// import { Event } from "./pages/Event";
import { Home } from "./pages/home";
import { Menu } from "./pages/menu";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Menu" element={<Menu />} />
      {/* <Route path="/Home" element={<Settings />} /> */}
      {/* <Route path="/event/lesson/:slug" element={<Event />} /> */}
    </Routes>
  );
}
