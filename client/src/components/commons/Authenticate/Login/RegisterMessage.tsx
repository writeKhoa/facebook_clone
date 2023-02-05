import React from "react";
import { Link } from "react-router-dom";

const RegisterMessage = () => {
  return (
    <>
      <Link to="/notdevelopment" className="font-semibold">
        Tạo trang
      </Link>{" "}
      dành cho người nổi tiếng, thương nghiệp hoặc doanh nghiệp.
    </>
  );
};

export default RegisterMessage;
