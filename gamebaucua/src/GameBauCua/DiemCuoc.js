import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function DiemCuoc() {
  const dispatch = useDispatch();

  const tongDiem = useSelector(state => state.reducer.tongDiem)

  return (
    <div>
      <h3 className="text-center display-4 pt-3" style={{ color: "red" }}>
        Game Bầu Cua Cyberlearn
      </h3>

      <div className="text-center mt-3">
        <span
          style={{ frontSize: "35px", borderRadius: "10px" }}
          className="p-3 text-white bg-danger"
        >
          Tổng điểm: <span style={{ color: "yellow" }}>{tongDiem.toLocaleString()}$</span>
        </span>
      </div>

      <div className="text-center mt-3">
        <button
        onClick={()=>{
          dispatch({
            type: "CHOI_LAI",
          })
        }}
          style={{ frontSize: "15px", borderRadius: "10px", border:"none" }}
          className="mt-3 text-white bg-success p-2"
        >
          Chơi lại
        </button>
      </div>
    </div>
  );
}
