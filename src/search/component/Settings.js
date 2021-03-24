import React from "react";
import { Dropdown, Menu, Button } from "antd";
import { SettingFilled } from "@ant-design/icons";

/**
 *
 * @param {ojbect} param
 * @param {() => void} param.logout
 */
const Settings = ({ logout }) => {
  return (
    <Dropdown
      overlay={
        <Menu>
          <Menu.Item onClick={logout}>로그아웃</Menu.Item>
        </Menu>
      }
      trigger={["click"]}
      placement="bottomRight"
    >
      <Button shape="circle" icon={<SettingFilled />} />
    </Dropdown>
  );
};

export default Settings;
