import React, { useState } from "react";
import { Space, Table } from "antd";
import { DownOutlined } from "@ant-design/icons";

const ListProfiles = () => {
  const defaultExpandable = {
    expandedRowRender: (record) => <p>{record.description}</p>,
  };
  const [bordered, setBordered] = useState(false);
  const [loading, setLoading] = useState(false);
  const [size, setSize] = useState("large");
  const [expandable, setExpandable] = useState(defaultExpandable);
  const [showTitle, setShowTitle] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [showfooter, setShowFooter] = useState(true);
  const [rowSelection, setRowSelection] = useState({});
  const [hasData, setHasData] = useState(true);
  const [tableLayout, setTableLayout] = useState();
  const [top, setTop] = useState("none");
  const [bottom, setBottom] = useState("bottomRight");
  const [ellipsis, setEllipsis] = useState(false);
  const [yScroll, setYScroll] = useState(false);
  const [xScroll, setXScroll] = useState();

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Address",
      dataIndex: "address",
      filters: [
        {
          text: "London",
          value: "London",
        },
        {
          text: "New York",
          value: "New York",
        },
      ],
      onFilter: (value, record) => record.address.indexOf(value) === 0,
    },
    {
      title: "Action",
      key: "action",
      sorter: true,
      render: () => (
        <Space size="middle">
          <h1>Delete</h1>
          <h1>
            <Space>
              More actions
              <DownOutlined />
            </Space>
          </h1>
        </Space>
      ),
    },
  ];
  const data = [];
  for (let i = 1; i <= 10; i++) {
    data.push({
      key: i,
      name: "John Brown",
      age: Number(`${i}2`),
      address: `New York No. ${i} Lake Park`,
      description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
    });
  }

  const defaultTitle = () => "Here is title";
  const defaultFooter = () => "Here is footer";

  const scroll = {};
  if (yScroll) {
    scroll.y = 240;
  }
  if (xScroll) {
    scroll.x = "100vw";
  }
  const tableColumns = columns.map((item) => ({
    ...item,
    ellipsis,
  }));
  if (xScroll === "fixed") {
    tableColumns[0].fixed = true;
    tableColumns[tableColumns.length - 1].fixed = "right";
  }
  const tableProps = {
    bordered,
    loading,
    size,
    expandable,
    title: showTitle ? defaultTitle : undefined,
    showHeader,
    footer: showfooter ? defaultFooter : undefined,
    rowSelection,
    scroll,
    tableLayout,
  };

  return (
    <>
      <div>
        <div className="h-36">
          <h1 className="text-xl font-bold text-gray-600">Customer profile</h1>
          <form className="w-[800px]">
            <div class="relative">
              <input
                type="search"
                id="default-search"
                class="block w-full p-3 pl-5 text-lg border border-gray-300 rounded-lg bg-[#EDF4FE] focus:ring-blue-500 focus:border-blue-500 text-black placeholder-black"
                placeholder="Search Customer"
                required
              />
              <div class="absolute inset-y-0 right-10 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
            </div>
          </form>
        </div>
        <Table
          {...tableProps}
          pagination={{
            position: [top, bottom],
          }}
          columns={tableColumns}
          dataSource={hasData ? data : []}
          scroll={scroll}
        />
      </div>
    </>
  );
};

export default ListProfiles;
