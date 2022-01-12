import React from "react";
import XucXac from "./XucXac";
import { useSelector , useDispatch} from "react-redux";

export default function DanhSachXucXac() {
  const dispatch = useDispatch();

  const mangXucXac = useSelector(state => state.reducer.mangXucXac);

  return (
    <div className="mt-4 ml-5">
      <div
        className="bg-white"
        style={{ width: 200, height: 200, borderRadius: 150 }}
      >
        <div className="row">
          <div className="col-12 text-center" style={{marginTop: -45, marginLeft: 57}}>
            <XucXac xucXacItem={mangXucXac[0]}/>
          </div>
          <div className="col-6 text-right " style={{marginTop: -60}}>
            <XucXac xucXacItem={mangXucXac[1]}/>
          </div>
          <div className="col-6 " style={{marginTop: -60}}>
            <XucXac xucXacItem={mangXucXac[2]}/>
          </div>
        </div>
        <div className="row">
          <button
          onClick={()=>{
            dispatch({
              type: "XOC",
              
            })
          }}
            className="bg-danger text-white"
            style={{
              border: "none",
              borderRadius: 10,
              marginTop: 100,
              marginLeft: 75,
              padding: 15,
              fontSize: 27,
            }}
          >
            {" "}
            XỐC
          </button>
        </div>
      </div>
    </div>
  );
}
