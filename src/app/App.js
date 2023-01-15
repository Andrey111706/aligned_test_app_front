import { ThemeProvider } from "@mui/material/styles";
import { StateProvider } from "./context/state";
import { AppContainer } from "./styles";
import Library from "./components/Library";
import Header from "./layout/Header";
import theme from "../theme";

function App() {
  return (
    <StateProvider>
      <ThemeProvider theme={theme}>
        <AppContainer>
          <Header />
          <Library />
        </AppContainer>
      </ThemeProvider>
    </StateProvider>
  );
}

export default App;
