import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Root from "./pages/root";
import LoginPage from "./pages/login-page";
import SortPage from "./pages/sort-page";
import AddPage from "./pages/add-page";
import DeletePage from "./pages/delete-page";
import ControlPanel from "./pages/control-panel";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<LoginPage />} />
      {/* <Route path="todo/:id" element={<SelectedTodo />} /> */}
      <Route path="controlpanel">
        <Route index element={<ControlPanel />} />
        <Route path="sort" element={<SortPage />} />
        <Route path="add" element={<AddPage />} />
        <Route path="delete" element={<DeletePage />} />
      </Route>
    </Route>
  )
);

export default router;
