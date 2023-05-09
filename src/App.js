import React from "react";
import "antd/dist/reset.css";
import { Layout, theme, ConfigProvider } from "antd";
import NavBar from "./components/NavBar";
import MenuBar from "./components/MenuBar";
import ListProfiles from "./components/Listprofiles";

const { Header, Content, Sider } = Layout;

function App() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <div className="bg-white">
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#fff",
            },
          }}
        >
          <Layout
            className="min-h-screen"
            style={{
              background: colorBgContainer,
            }}
          >
            <Header
              className=" bg-white h-auto inline-block align-middle"
              style={{ position: "sticky", top: 0, zIndex: 1, width: "100%" }}
            >
              <NavBar />
            </Header>
            <Layout>
              <Sider
                width={300}
                style={{ background: "#EDF4FE", borderRadius: "30px" }}
              >
                <MenuBar />
              </Sider>
              <Layout>
                <Content
                  style={{
                    padding: 30,
                    margin: 0,
                    minHeight: "100%",
                    background: colorBgContainer,
                  }}
                >
                  <ListProfiles />
                </Content>
              </Layout>
            </Layout>
          </Layout>
        </ConfigProvider>
      </div>
    </>
  );
}

export default App;
