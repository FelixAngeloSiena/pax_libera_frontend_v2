import { useState } from "react";
import RightSection from "./RightSection";
import { Button, Space } from "antd";
import "antd/dist/reset.css";
import "../assets/css/Login.css";
import LoginPage from "./Login";
import Registration from "../components/registration/Registration";

function LandingPage() {
  const [redirect, setRedirect] = useState(false);

  function handleLoginClick() {
    setRedirect(true);
  }

  if (redirect) {
    return <LoginPage />;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
      }}
    >
      <div className="left-section">
        <Space direction="vertical" style={{ width: "50%" }}>
          <div className="title">
            <h1>Welcome, User!</h1>
            <p>Let’s get started.</p>
          </div>
          <div className="loginBTN">
            <Button block className="defaultBTN" onClick={handleLoginClick}>
              Login
            </Button>
          </div>
          <div>
            <Button type="primary" block className="primaryBTN">
              Create Account
            </Button>
          </div>
        </Space>
      </div>
      <RightSection />
    </div>
  );
}

export default LandingPage;
