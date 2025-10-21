import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router";
import CoreRouter from "./CoreRouter.tsx";

const queryClient = new QueryClient();

const Core = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <CoreRouter />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default Core;
