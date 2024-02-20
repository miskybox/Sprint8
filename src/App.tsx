//App.tsx
import './styles/App.css';
import GraphicData from "./components/GraphicData";
import TotalBalance from "./components/TotalBalance";
import { ContextProvider } from "./context/Context";

function App() {
  return (
    <ContextProvider>
      <TotalBalance />
      <GraphicData />
    </ContextProvider>
  );
}

export default App;
