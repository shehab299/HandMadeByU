import AppRoutes from "@components/AppRoutes";
import GlobalStyles from "@styles/GlobalStyles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <AppRoutes />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
