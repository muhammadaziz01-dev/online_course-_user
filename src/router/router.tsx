import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";
  
  import App from "../App";
  import { Home  } from "@pages";
  import HomeLayout from "../layout";
  
  const index = () => {
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="/" element={<HomeLayout />}>
                <Route index element={<Home />} />
                {/* <Route path="xizmatlar" element={<Xizmatlar />} />
                <Route path="malumotlar" element={<Malumotlar />} />
                <Route path="aloqa" element={<Aloqa />} />
                <Route path="maxsulotlar" element={<Maxsulotlar />} />
                <Route path="loyihalar" element={<Loyihalar />} />
                <Route path="yangiliklar" element={<Yangiliklar />} /> */}
            </Route>  
          </Route>
      )
    );
    return <RouterProvider router={router} />;
  };
  
  export default index;
  