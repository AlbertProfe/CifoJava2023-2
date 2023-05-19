import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./route/Layout.jsx";
import Home from "./pages/home/Home.jsx";
import ToDoApp from "./pages/todoApp/ToDoApp.jsx";
import ToDoGrid from "./pages/todoGrid/ToDoGrid.jsx";
import NoPage from "./route/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="todoapp" element={<ToDoApp />} />
          <Route path="todogrid" element={<ToDoGrid />} />

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
