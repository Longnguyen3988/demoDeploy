import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { localServ } from "../../services/localService";

export default function UserNav() {
  let user = useSelector((state) => {
    return state.userReducer.userInfor;
  });
  console.log("user: ", user);

  let handleLogout = () => {
    // xoá data từ localStorage
    localServ.user.remove();
    // remove data từ redux
    //  dispatch({
    // type:SET_USER
    // payload:null
    // })
    window.location.href = "/login";
  };

  let renderContent = () => {
    if (user) {
      return (
        <>
          <span className="font-medium text-blue-800 underline ">
            {user.hoTen}
          </span>
          <button
            onClick={handleLogout}
            className="border rounded border-red-500 px-5 py-1.5 text-red-500"
          >
            Đăng xuất
          </button>
        </>
      );
    } else {
      return (
        <>
          <NavLink to="/login">
            {" "}
            <button className="border rounded border-black text-black px-5 py-1.5 hover:bg-black hover:text-white transition ">
              Đăng nhập
            </button>
          </NavLink>
          <button className="border rounded border-red-500 px-5 py-1.5 text-red-500">
            Đăng kí
          </button>
        </>
      );
    }
  };
  return <div className="space-x-5">{renderContent()}</div>;
}
