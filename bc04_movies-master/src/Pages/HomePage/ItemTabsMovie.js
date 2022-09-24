import moment from "moment";
import React from "react";

export default function ItemTabsMovie({ data }) {
  return (
    <div className="p-3 flex space-x-5  border-b border-red-500">
      <img className="w-28 h-36 object-cover" src={data.hinhAnh} />

      <div className="flex-grow">
        <p>{data.tenPhim}</p>

        {/* map lich chieu */}

        <div className="grid grid-cols-3 gap-5 ">
          {data.lstLichChieuTheoPhim.slice(0, 9).map((gioChieu) => {
            return (
              <div className="p-3 rounded bg-red-600 text-white text-center">
                {moment(gioChieu.ngayChieuGioChieu).format(
                  "DD-MM-YYYY ~ hh:mm"
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
