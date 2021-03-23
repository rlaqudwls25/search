import React from "react";
import { AutoComplete } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const SearchInput = () => {
  const setKeword = (value) => {};
  const gotoUser = (value) => {};
  return (
    <AutoComplete
      value={keyword}
      onChange={setKeword}
      onSelect={gotoUser}
      style={{
        width: "100%",
      }}
      options={{}}
      autoFocus
    >
      <Input
        size="large"
        placeholder="input here"
        prefix={<SearchOutlined />}
      />
    </AutoComplete>
  );
};

export default SearchInput;
