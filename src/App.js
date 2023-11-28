import React from "react";
import { Layout, Typography } from "antd";
import "./App.css";

import BatchesView from "modules/batches/BatchesView";

function App() {
  /**
   * RENDER
   **/
  const { Header, Content, Footer } = Layout;
  const { Title } = Typography;

  return (
    <div className="App">
      <Layout style={{ minHeight: "100vh" }}>
        <Header>
          <Title level={2} style={{ color: "white", marginBottom: 0 }}>
            UI Challenge
          </Title>
        </Header>
        <Content>
          <BatchesView />
        </Content>
        <Footer>by Ryan Boros</Footer>
      </Layout>
    </div>
  );
}

export default App;
