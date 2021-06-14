import React from "react";
import { PageHeader, Col, Row } from "antd";
import { useHistory } from "react-router-dom";

const User = () => {
  const history = useHistory();
  return (
    <Row justify="center">
      <Col xs={24} md={20} lg={14}>
        <PageHeader onBack={history.goBack} title="사용자 정보">
          사용자 정보
        </PageHeader>
      </Col>
    </Row>
  );
};

export default User;
