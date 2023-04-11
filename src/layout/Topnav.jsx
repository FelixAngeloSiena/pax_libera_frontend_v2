import React from 'react'
import { Layout, theme, Avatar, Row, Col } from 'antd';
import { FaSignOutAlt, FaCaretDown, FaUserCog } from "react-icons/fa"
import { Dropdown, Space } from 'antd';
const { Header } = Layout;

const Topnav = () => {

  const {token: { colorBgContainer }} = theme.useToken();

  const items = [
    {
        key: '1',
        success: true,
        icon: <FaUserCog />,
        label: 'Account Settings',
    },

    {
      key: '2',
      danger: true,
      icon: <FaSignOutAlt />,
      label: 'Logout',
    },
  ];
  return (
    <Header style={{ background: colorBgContainer }}>
         <Row justify="end" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Dropdown menu={{ items }} >
                    <a style= {{color:'#000'}} onClick={(e) => e.preventDefault()}>
                        <Space  className="navbar-settings">
                        Archie Em
                            <FaCaretDown />
                        </Space>
                    </a>
                </Dropdown>         
        </Row>

       
    </Header>
  )
}

export default Topnav