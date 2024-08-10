import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";
  
  import App from "../App";
  import { Home , Auth , Courses } from "@pages";
  import HomeLayout from "../layout";
  
  const index = () => {
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="/" element={<HomeLayout />}>
                <Route index element={<Home />} />
                <Route path=":coursId" element={<Courses />} />
                <Route path="auth" element={<Auth />} />
            </Route>  
          </Route>
      )
    );
    return <RouterProvider router={router} />;
  };
  
  export default index;
  