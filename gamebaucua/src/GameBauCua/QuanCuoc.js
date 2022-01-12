import React from "react";
import { useDispatch } from "react-redux";

import { useSpring, animated } from "react-spring";

export default function QuanCuoc(props) {
  const propsUseSpring = useSpring({ to: { scale: 1 }, from: { scale: 0 } });

  const dispatch = useDispatch();

  const { quanCuoc } = props;
  return (
    <div className="mt-3">
      <img src={quanCuoc.hinhAnh} style={{ width: 200 }} />

      <div
        className="btn btn-success mt-2 pb-2 text-center"
        style={{ width: 200 }}
      >
        <animated.button
          onClick={() => {
            dispatch({ 
              type: "DAT_CUOC_BAU_CUA",
              quanCuoc,
              tangGiam: true,
            });
          }}
          className="btn btn-danger mr-3"
          style={{ fontSize: "20px", transform: propsUseSpring.scale.interpolate(scale => `scale(${scale})`) }}
        >
          +
        </animated.button>
        <span className="mr-2" style={{ color: "yellow", fontSize: "25px" }}>
          {quanCuoc.diemCuoc}
        </span>
        <animated.button
          onClick={() => {
            dispatch({
              type: "DAT_CUOC_BAU_CUA",
              quanCuoc,
              tangGiam: false,
            });
          }}
          className="btn btn-danger ml-2"
          style={{ fontSize: "20px" }}
        >
          -
        </animated.button>
      </div>
    </div>
  );
}
