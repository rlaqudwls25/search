import React from "react";
import { AutoComplete, Input, Typography, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../state";
import { actions as userActions } from "../../user/state";

import { useHistory } from "react-router";

const Search = () => {
  const keyword = useSelector((state) => state.search.keyword);
  const dispatch = useDispatch();
  const setKeyword = (value) => {
    if (value !== keyword) {
      dispatch(actions.setValue("keyword", value));
      dispatch(actions.fetchAutoComplete(value));
    }
  };

  const autoCompletes = useSelector((state) => state.search.autoCompletes);
  const history = useHistory();
  const goToUser = (value) => {
    const user = autoCompletes.find((item) => item.name === value);
    if (user) {
      dispatch(userActions.setValue("user", user));
      history.push(`/user/${user.name}`);
    }
  };
  return (
    <AutoComplete
      value={keyword}
      onChange={setKeyword}
      onSelect={goToUser}
      style={{
        width: "100%",
      }}
      options={autoCompletes.map((item) => ({
        value: item.name,
        lable: (
          <Space>
            <Typography.Text strong>{item.name}</Typography.Text>
            <Typography.Text type="secondary">
              {item.department}
            </Typography.Text>
            <Typography.Text>{item.tag}</Typography.Text>
          </Space>
        ),
      }))}
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
