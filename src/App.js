import { StrictMode } from "react";
import Context from "./context/Context";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";

const App = () => {
  return (
    <StrictMode>
      <Context>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Context>
    </StrictMode>
  );
};

export default App;
