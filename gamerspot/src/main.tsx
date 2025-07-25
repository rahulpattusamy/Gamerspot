import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider,   } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools/production";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./components/theme.ts";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./services/route.tsx";

const queryclient = new QueryClient()

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <QueryClientProvider client={queryclient}>
        <RouterProvider router={router}/>
        <ReactQueryDevtools/>
      </QueryClientProvider>
    </ChakraProvider>
  </StrictMode>
);
