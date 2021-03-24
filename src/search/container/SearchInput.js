import React from "react";
import { AutoComplete, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../state";

const Search = () => {
  const keyword = useSelector((state) => state.search.keyword);
  const dispatch = useDispatch();
  const setKeyword = (value) => {
    if (value !== keyword) {
      dispatch(actions.setValue("keyword", value));
      dispatch(actions.fetchAutoComplete(value));
    }
  };

  // const AutoComplete = useSelector((state) => state.search.autoComplete);
  const gotoUser = (value) => {};
  return (
    <AutoComplete
      value={keyword}
      onChange={setKeyword}
      onSelect={gotoUser}
      style={{
        width: "100%",
      }}
      options={[]}
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

export default Search;
