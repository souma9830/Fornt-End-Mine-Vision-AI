import Home from "./pages/Home";

import useGsapAnimations from "./hooks/useGsapAnimations";

function App() {
  useGsapAnimations();

  return (
    <div>
      <Home />
    </div>
  );
}

export default App;