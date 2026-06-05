import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MapPage from "@/pages/MapPage";
import LandingPage from "@/pages/LandingPage";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route path="/map" component={MapPage} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <LanguageSwitcher />
        <Router />
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;
