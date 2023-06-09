import React, { useState, useEffect } from "react";
import { Button, Tag, Row, Col, Select, Card } from "antd";
import "../../assets/css/Styles.css";
import Bottomnav from "../../layout/Bottomnav";
import Sidenav from "../../layout/Sidenav";
import Topnav from "../../layout/Topnav";
import LineGraphComponent from "../../resources/graphs/LineGraphComponent";
import BarGraphComponent from "../../resources/graphs/BarGraphComponent";
import { Layout } from "antd";
const { Content } = Layout;

const Dashboard = () => {
  return (
    <Layout className="layout-container">
      <Sidenav />
      <Layout className="site-layout">
        <Topnav />
        <Content
          style={{
            margin: 20,
            padding: 20,
            backgroundImage: `url(${require("../../assets/images/pax-logo-no-label.png")})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Row gutter={12}>
            <Col span={12}>
              <Card>
                <LineGraphComponent />
              </Card>
            </Col>
            <Col span={12}>
              <Card>
                <BarGraphComponent />
              </Card>
            </Col>
          </Row>
        </Content>
        <Bottomnav />
      </Layout>
    </Layout>
  );
};
export default Dashboard;
