import React from "react";
import { useSelector } from "react-redux";
import { PacmanLoader } from "react-spinners";

export default function Spinner() {
  let { isLoading } = useSelector((state) => state.spinnerReducer);

  return isLoading ? (
    <div
      style={{ marginTop: 0 }}
      className="h-screen w-screen fixed left-0 top-0 bg-black flex justify-center items-center  z-50"
    >
      <PacmanLoader size={100} color="#ffb703" />
    </div>
  ) : (
    <></>
  );
}
