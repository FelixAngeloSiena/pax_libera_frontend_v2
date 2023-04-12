import RightSection from "./RightSection";
import { Button, Space, Input } from "antd";
import "antd/dist/reset.css";
import "../assets/css/Login.css";

function Login() {
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
          <div className="Logintitle">
            <h1>Log in</h1>
            <div className="signUp">
              <p>Don’t have an account?</p>
              <a>Sign up</a>
            </div>
          </div>
          <form>
            <div>
              <Input
                type="email"
                placeholder="E-mail Address"
                name="username"
              />
            </div>
            <div className="passwordContainer">
              <Input type="password" placeholder="Password" name="password" />
              <a>Forgot Password?</a>
            </div>
            <div className="loginBTN">
              <Button block className="defaultBTN" htmlType="submit">
                Log in
              </Button>
            </div>
          </form>
        </Space>
      </div>
      <RightSection />
    </div>
  );
}

export default Login;
