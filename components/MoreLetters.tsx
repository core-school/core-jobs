import { ReactJSXIntrinsicElements } from "@emotion/react/types/jsx-namespace";
import { SVGProps, useEffect, useRef, useState } from "react";
import tw from "twin.macro";

const Outlined = ({ children }) => {
  const [width, setWidth] = useState(0);
  const ref = useRef<SVGTextElement>();
  useEffect(() => {
    const box = ref.current.getBBox();
    setWidth(box.width + 10);
  }, [ref]);

  return (
    <div tw="inline-block">
      <svg width={width} height="75">
        <text
          x="0"
          y="50"
          tw="text-6xl"
          ref={ref}
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#000000",
            strokeWidth: 1,
            strokeOpacity: 1,
          }}
        >
          {children}
        </text>
      </svg>
    </div>
  );
};

export const MoreLetters = () => {
  return (
    <div>
      <Outlined>Docker</Outlined>
      <Outlined>React</Outlined>
      <Outlined>Javascript</Outlined>
      <Outlined>Typescript</Outlined>
      <Outlined>Python</Outlined>
      <Outlined>Machine Learning</Outlined>
      <Outlined>Kubernetes</Outlined>
    </div>
  );
};
