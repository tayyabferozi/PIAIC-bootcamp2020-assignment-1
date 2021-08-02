import GlobalProvider from "./context/GlobalState";
import Heading from "./components/Heading";
import Body from "./components/Body";
import Input from "./components/Input";
import History from "./components/History";
import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <Heading />
      <Body />
      <Input />
      <History />
    </GlobalProvider>
  );
}

export default App;
