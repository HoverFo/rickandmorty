import React from "react";

import { Navigator } from "./src/navigation/Navigator";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigator />
    </QueryClientProvider>
  );
};


export default App;