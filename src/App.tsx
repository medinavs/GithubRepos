import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "./styles/themes";
import { GlobalStyles } from "./styles/global";
import { ProfileProvider } from "./context";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

export function App() {

  return (
    <ThemeProvider theme={DefaultTheme}>
      <ProfileProvider>
      <GlobalStyles />
        <RouterProvider router={router} />
      </ProfileProvider>
    </ThemeProvider>
  )
}

