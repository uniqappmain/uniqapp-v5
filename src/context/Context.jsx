import Theme from "../theme/Theme";
import { AppContextProvider } from "./AppContext";
import { UserContextProvider } from "./UserContext";

const Context = ({ children }) => {
  return (
    <Theme>
      <AppContextProvider>
        <UserContextProvider>{children}</UserContextProvider>
      </AppContextProvider>
    </Theme>
  );
};

export default Context;
