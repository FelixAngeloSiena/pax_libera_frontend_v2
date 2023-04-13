import React, { useState, useEffect } from "react";
import { Space, Table, Tag, Card, Button, Row, Col } from "antd";
import "../../../../assets/css/Styles.css";
import Bottomnav from "../../../../layout/Bottomnav";
import Sidenav from "../../../../layout/Sidenav";
import Topnav from "../../../../layout/Topnav";
import { Layout } from "antd";
const { Content } = Layout;

const PurchaseRequest = () => {
  const columns = [
    {
      title: "x",
      //   dataIndex: "address",
      //   key: "address",
    },
    {
      title: "Request No.",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Purchaser's Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Date Submitted",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <p>Apr 13, 2023</p>
        </Space>
      ),
    },
    {
      title: "Status",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "Disapprove") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["Submitted"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["Disapprove"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["Submitted"],
    },
  ];
  return (
    <Layout className="layout-container">
      <Sidenav />
      <Layout className="site-layout">
        <Topnav />
        <Content
          style={{
            margin: 20,
            padding: 20,
            backgroundImage: `url(${require("../../../../assets/images/pax-logo-no-label.png")})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* <Col>
            <p style={{ fontSize: "30px" }}>Purchase Request</p>
            <div style={{ display: "flex", justifyContent: "end" }}>
              <Button type="primary">Add New</Button>
            </div>
          </Col> */}
          <Row style={{ marginBottom: "10px" }}>
            <Col span={8} style={{ fontSize: "30px" }}>
              Purchase Request
            </Col>
            <Col
              span={8}
              offset={8}
              style={{ display: "flex", justifyContent: "end" }}
            >
              <Button type="primary">Add New</Button>
            </Col>
          </Row>
          <Card>
            <Row style={{ marginBottom: "10px" }}>
              <Col style={{ padding: "20px" }}>
                <a href="#" active>
                  All
                </a>
              </Col>
              <Col style={{ padding: "20px" }}>
                <a href="#">Approve</a>
              </Col>
              <Col style={{ padding: "20px" }}>
                <a href="#">Disapprove</a>
              </Col>
              <Col style={{ padding: "20px" }}>
                <a href="#">Submitted</a>
              </Col>
              <Col style={{ padding: "20px" }}>
                <a href="#">Drafts</a>
              </Col>
            </Row>
            <Table columns={columns} dataSource={data} />
          </Card>
        </Content>
        <Bottomnav />
      </Layout>
    </Layout>
  );
};

export default PurchaseRequest;
