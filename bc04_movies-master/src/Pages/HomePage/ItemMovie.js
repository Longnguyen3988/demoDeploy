import { Card } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
const { Meta } = Card;

export default function ItemMovie({ data = {} }) {
  return (
    <Card
      hoverable
      style={{
        width: "100%",
      }}
      cover={
        <img
          className=" h-80 w-full object-cover "
          alt="example"
          src={data.hinhAnh}
        />
      }
    >
      <Meta
        title={<p className="text-red-500 truncate">{data.tenPhim}</p>}
        description="www.instagram.com"
      />
      <NavLink to={`/detail/${data.maPhim}`}>
        {" "}
        <button className=" w-full py-2 text-center bg-red-500 text-white mt-5 rounded  transition cursor-pointer duration-300  hover:bg-black">
          Xem chi tiết
        </button>
      </NavLink>
    </Card>
  );
}
/**
 * {
    "maPhim": 4421,
    "tenPhim": "Avenger - End Game",
    "biDanh": "avenger-end-game",
    "trailer": "https://www.youtube.com/watch?v=TcMBFSGVi1c",
    "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/avenger-end-game_gp05.jpg",
    "moTa": "Phim hay vãi chưởng.!",
    "maNhom": "GP05",
    "ngayKhoiChieu": "2020-10-10T00:00:00",
    "danhGia": 10,
    "hot": false,
    "dangChieu": true,
    "sapChieu": false
}
 */
