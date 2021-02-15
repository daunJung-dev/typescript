import React from "react";
import { Global, Theme } from "@emotion/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Layout from "./components/Layout";
import MainContent from "./components/MainContent/MainContent";
import { ThemeProvider } from "@emotion/react";
import { globalStyles } from "./globalStyles";
import { RecoilRoot } from "recoil";

const theme: Theme = {
  color: {
    primary: "#010101",
    secondary: "#ff4534",
    negative: "",
    positive: "",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <Layout>
          <Header></Header>
          <MainContent></MainContent>
          <Footer />
        </Layout>
        <Global styles={globalStyles} />
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
