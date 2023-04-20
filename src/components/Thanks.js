import React, {useEffect, useRef, useState} from "react";
import Header from "./Home/Header";
import Mailing from "./Home/Mailing";

export default function Thanks() {
  const [height, setHeight] = useState(0);
  const refHeight = useRef();

  const computeHeight = () => {
    const elementTop = refHeight.current.getBoundingClientRect().top;
    const bodyHeight =  window.innerHeight;
    const resultHeight = bodyHeight - elementTop - 2;

    setHeight(resultHeight);
  }

  useEffect(() => {
    computeHeight();
  });

  useEffect(() => {
    window.addEventListener("resize", computeHeight);
    return () => window.removeEventListener("resize", computeHeight);
  });

  return (
    <React.Fragment>
      <Header/>
      <div ref={refHeight} style={{height: height}} className="thanks">
        <h2 className="thanks__title">Спасибо за покупку</h2>
        <Mailing
          modifier={"mailing_type_thanks"}
          classInput={"mailing__email_type_thanks"}
        />
      </div>
    </React.Fragment>
  )
}