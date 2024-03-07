"use client ";
import Image from "next/image";
import ReactCurvedText from "react-curved-text";

export const CurveText = () => {
  return (
    <div>
      <ReactCurvedText
        width={200}
        height={200}
        cx={150}
        cy={150}
        rx={100}
        ry={100}
        startOffset={50}
        reversed={false}
        text="to view collection suscribe"
        textProps={{ style: { fontSize: 24 } }}
      ></ReactCurvedText>
    </div>
  );
};
