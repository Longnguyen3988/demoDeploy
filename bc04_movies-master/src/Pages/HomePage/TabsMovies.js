import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import { moviesServ } from "../../services/moviesService";
import ItemTabsMovie from "./ItemTabsMovie";
export default function TabsMovies() {
  const [dataMovies, setDataMovies] = useState([]);
  useEffect(() => {
   
    moviesServ
      .getMovieByTheater()
      .then((res) => {
        console.log(res);
        setDataMovies(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let renderContent = () => {
    return dataMovies.map((heThongRap, index) => {
      return (
        <Tabs.TabPane
          tab={<img className="w-16 h-16" src={heThongRap.logo} />}
          key={index}
        >
          <Tabs style={{ height: 500 }} tabPosition="left">
            {heThongRap.lstCumRap.map((cumRap, index) => {
              return (
                <Tabs.TabPane
                  tab={
                    <div className="w-48 text-left ">
                      <p className="text-gray-700 truncate">
                        {cumRap.tenCumRap}
                      </p>
                      <p className="truncate">{cumRap.diaChi}</p>
                    </div>
                  }
                  key={index}
                >
                  <div
                    style={{ height: 500, overflowY: "scroll" }}
                    className="h-32 scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
                  >
                    {cumRap.danhSachPhim.map((phim) => {
                      return <ItemTabsMovie data={phim} />;
                    })}
                  </div>
                </Tabs.TabPane>
              );
            })}
          </Tabs>
        </Tabs.TabPane>
      );
    });
  };

  return (
    <div>
      <Tabs style={{ height: 500 }} tabPosition="left" defaultActiveKey="1">
        {renderContent()}
      </Tabs>
    </div>
  );
}
