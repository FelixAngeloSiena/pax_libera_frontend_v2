import React, { useState } from 'react';
import {Layout, Menu, Image, Row, Col, Divider } from 'antd';
import { FaFolderOpen, FaHardHat, FaRoad, FaThList, FaSuperscript } from "react-icons/fa"
import Logo from '../assets/images/logo.webp'
import { CiAlignBottom } from "react-icons/ci";
import { HiPlus, HiOutlineShoppingCart, HiOutlineShoppingBag, HiOutlineCog6Tooth, HiOutlineDocumentMagnifyingGlass} from "react-icons/hi2";

const { Sider } = Layout;

function getItem(label, key, icon, children) {
  return { key, icon, children, label };
}

const items = [
  getItem(<a href='/'> Dashboard</a>, '0', <CiAlignBottom />),
  getItem('Purchases', 'sub1', <HiOutlineShoppingBag />, [
    getItem('Supplier','sub-item-1', <HiOutlineShoppingCart/>),
    getItem('Canvas', 'sub-item-2', <HiOutlineDocumentMagnifyingGlass />),
    getItem('Purchase Request', 'sub-item-2', <HiPlus />),
  ]),

  getItem('Settings', '8', <HiOutlineCog6Tooth />),

];


const Sidenav = () => {
  return (
    <Sider
      style={{background:'#fff'}}
      breakpoint="lg"
      collapsedWidth="0"
      width="225"
      >
      <div style={{paddingBottom:'20px', paddingTop:'20px'}}>
          <Row justify="space-around" align="middle">
              <Image width="50%" src={Logo} preview={false}/>
          </Row>
      </div>
      <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" items={items}  className="sidenav-menu"/>
    </Sider>
  )
}

export default Sidenav