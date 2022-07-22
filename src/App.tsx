import { Header } from "./components/header";
import { Router } from "./Router";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Router />
    </div>
  );
}

export default App;
