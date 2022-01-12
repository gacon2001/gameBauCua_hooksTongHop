import React from "react";
import { useSpring, animated } from "react-spring";

export default function XucXac(props) {
  const { xucXacItem } = props;

  const [propsDice, set] = useSpring(() => ({
    to: {
      xyz: [360, 360, 360]
    },
    from: {
      xyz: [0, 0, 0]
    },
    config: {
      duration: 1000
    },
    reset: true
  }));

  set({xyz:[360, 360, 360]})

  return (
    <div className="scene">
      <animated.div
        style={{
          transform: propsDice.xyz.interpolate(
            (x, y, z) =>
              `translateZ(-25px) rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`
          ),
        }}
        className="cube"
      >
        <img
          className="cube__face front"
          style={{ width: "100%" }}
          src={xucXacItem.hinhAnh}
        />
        <img
          className="cube__face back"
          style={{ width: "100%" }}
          src="/img/bau.png"
        />
        <img
          className="cube__face right"
          style={{ width: "100%" }}
          src="/img/ga.png"
        />
        <img
          className="cube__face left"
          style={{ width: "100%" }}
          src="/img/tom.png"
        />
        <img
          className="cube__face top"
          style={{ width: "100%" }}
          src="/img/cua.png"
        />
        <img
          className="cube__face bottom"
          style={{ width: "100%" }}
          src="/img/ca.png"
        />
      </animated.div>
    </div>
  );
}
