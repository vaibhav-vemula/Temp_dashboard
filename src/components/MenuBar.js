import React from "react";
import { Button, Checkbox, Col, Row, Divider } from "antd";

const MenuBar = () => {
  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };
  return (
    <>
      <div className="">
        <div className="flex justify-between p-6">
          <h1 className="my-auto text-xl font-bold text-gray-600">Filters</h1>
          <Button ghost type="text" className="font-bold text-red-600">
            Clear All
          </Button>
        </div>
        <div className="px-6">
          <h1 className="my-auto text-lg font-bold text-gray-600 pb-4">Type</h1>
          <div className="pl-4">
            <Checkbox.Group
              style={{
                width: "100%",
              }}
              onChange={onChange}
            >
              <Col>
                <Row span={4}>
                  <Checkbox
                    value="block"
                    className="w-6 h-6 pb-5 text-gray-500"
                    style={{ zoom: "1.3" }}
                  >
                    <span className="pl-3">Block</span>
                  </Checkbox>
                </Row>
                <Row span={4}>
                  <Checkbox
                    value="slab"
                    className="w-6 h-6 pb-5 text-gray-500"
                    style={{ zoom: "1.3" }}
                  >
                    <span className="pl-3">Slab</span>
                  </Checkbox>
                </Row>
              </Col>
            </Checkbox.Group>
          </div>
        </div>
        <Divider
          style={{
            borderColor: "rgb(75,85,99)",
          }}
        />

        <div className="px-6">
          <h1 className="my-auto text-lg font-bold text-gray-600 pb-4">
            Category
          </h1>
          <div className="pl-4">
            <Checkbox.Group
              style={{
                width: "100%",
              }}
              onChange={onChange}
            >
              <Col>
                <Row span={4}>
                  <Checkbox
                    value="Granite"
                    className="w-6 h-6 pb-5 text-gray-500"
                    style={{ zoom: "1.3" }}
                  >
                    <span className="pl-3">Granite</span>
                  </Checkbox>
                </Row>
                <Row span={4}>
                  <Checkbox
                    value="Marbel"
                    className="w-6 h-6 pb-5 text-gray-500"
                    style={{ zoom: "1.3" }}
                  >
                    <span className="pl-3">Marbel</span>
                  </Checkbox>
                </Row>
                <Row span={4}>
                  <Checkbox
                    value="Quartz"
                    className="w-6 h-6 pb-5 text-gray-500"
                    style={{ zoom: "1.3" }}
                  >
                    <span className="pl-3">Quartz</span>
                  </Checkbox>
                </Row>
                <Row span={4}>
                  <Checkbox
                    value="Sandstone"
                    className="w-6 h-6 pb-5 text-gray-500"
                    style={{ zoom: "1.3" }}
                  >
                    <span className="pl-3">Sandstone</span>
                  </Checkbox>
                </Row>
              </Col>
            </Checkbox.Group>
            <Button ghost type="text" className="font-bold text-blue-600 pt-2">
            +12 more
          </Button>
          </div>
        </div>


        <Divider
          style={{
            borderColor: "rgb(75,85,99)",
          }}
        />

        <div className="px-6">
          <h1 className="my-auto text-lg font-bold text-gray-600 pb-4">
            Finish
          </h1>
          <div className="pl-4">
            <Checkbox.Group
              style={{
                width: "100%",
              }}
              onChange={onChange}
            >
              <Col>
                <Row span={4}>
                  <Checkbox
                    value="Brushed"
                    className="w-6 h-6 pb-5 text-gray-500"
                    style={{ zoom: "1.3" }}
                  >
                    <span className="pl-3">Brushed</span>
                  </Checkbox>
                </Row>
                <Row span={4}>
                  <Checkbox
                    value="Natural"
                    className="w-6 h-6 pb-5 text-gray-500"
                    style={{ zoom: "1.3" }}
                  >
                    <span className="pl-3">Natural</span>
                  </Checkbox>
                </Row>
                <Row span={4}>
                  <Checkbox
                    value="Polished"
                    className="w-6 h-6 pb-5 text-gray-500"
                    style={{ zoom: "1.3" }}
                  >
                    <span className="pl-3">Polished</span>
                  </Checkbox>
                </Row>
                <Row span={4}>
                  <Checkbox
                    value="Silk"
                    className="w-6 h-6 pb-5 text-gray-500"
                    style={{ zoom: "1.3" }}
                  >
                    <span className="pl-3">Silk</span>
                  </Checkbox>
                </Row>
              </Col>
            </Checkbox.Group>
            <Button ghost type="text" className="font-bold text-blue-600 pt-2">
            +11 more
          </Button>
          </div>
        </div>

        <Divider
          style={{
            borderColor: "rgb(75,85,99)",
          }}
        />

        <div className="px-6">
          <h1 className="my-auto text-lg font-bold text-gray-600 pb-4">Group</h1>
          <div className="pl-4">
            <Checkbox.Group
              style={{
                width: "100%",
              }}
              onChange={onChange}
            >
              <Col>
                <Row span={4}>
                  <Checkbox
                    value="block"
                    className="w-6 h-6 pb-5 text-gray-500"
                    style={{ zoom: "1.3" }}
                  >
                    <span className="pl-3">Classic</span>
                  </Checkbox>
                </Row>
                <Row span={4}>
                  <Checkbox
                    value="slab"
                    className="w-6 h-6 pb-5 text-gray-500"
                    style={{ zoom: "1.3" }}
                  >
                    <span className="pl-3">Exotic</span>
                  </Checkbox>
                </Row>
              </Col>
            </Checkbox.Group>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuBar;
