import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import ProductDetail from "./pages/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "products/:productId", element: <ProductDetail /> },
    ],
  },
]);

// //AlternatifYol (https://reactrouter.com/en/main)
// const routeDefinitions= createBrowserRouter(
// <Route>
//   <Route path="/" element={<HomePage/>}/>
//   <Route path="/products" element={<ProductsPage/>}/>
// </Route>
// )
// const router= createRoutesFromElements(routeDefinitions)

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

//Route Component ile yapımı üsteski router ile daha kullanışlıdır.
// function App() {
//   return <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<RootLayout/>}>
//         <Route path="/" element={<HomePage/>}>
//         <Route path="/products" element={<ProductsPage/>}>
//         <Route path="/products/:productsId" element={<ProductDetail/>}>
//       </Route>
//       <Route path="*" element={<ErrorPage/>}></Route>
//     </Routes>
//   </BrowserRouter>;
// }

export default App;
