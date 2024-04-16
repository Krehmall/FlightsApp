import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "./provider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </Provider>
);
