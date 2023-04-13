import React from 'react'
import { Table } from "antd";

const DatatableComponent = ({columns, dataSource}) => {
  return (
    <Table
      bordered
      columns={columns}
      dataSource={dataSource}

    />
  )
}

export default DatatableComponent