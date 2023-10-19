import {
  BrowserRouter as Router,
} from "react-router-dom";
import {
  Arwes,
  SoundsProvider,
  ThemeProvider,
  createSounds,
  createTheme,
} from "arwes";

import AppLayout from "./pages/AppLayout";

import { theme, resources, sounds } from "./settings";

const App = () => {
  return <ThemeProvider theme={createTheme(theme)}>
    <SoundsProvider sounds={createSounds(sounds)}>
      <Arwes animate background={resources.background.medium} pattern={resources.pattern}>
        {anim => (
          <Router>
            <AppLayout show={anim.entered} />
          </Router>
        )}
      </Arwes>
    </SoundsProvider>
  </ThemeProvider>;
};

export default App;
