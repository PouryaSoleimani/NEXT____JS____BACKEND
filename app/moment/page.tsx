"use client";
import React, { useEffect } from "react";
import moment from "moment";
import "moment/locale/fa";
import MOMENT_JALAALI from "moment-jalaali";
import Log from "@/hooks/Logger";

// COMPONENT
const MomentPage = () => {

  const [newTime] = React.useState(() => moment().format("LT"));

  useEffect(() => {
    console.log(newTime);
  }, [newTime]);

  Log("TIME", "WHITE", newTime);

  return (
    <div className='screen center flex-col gap-4 font-["Vazir"]' dir="rtl">
      {MOMENT_JALAALI().format("jYYYY/jMM/jDD")}
      <h2>{MOMENT_JALAALI().add(2, "days").format("jYYYY/jMM/jDD")}</h2>
      <h2>{MOMENT_JALAALI().format("HH:mm")}</h2>
      <h2>امروز : {MOMENT_JALAALI().format("jYYYY-jMM-jDD")}</h2>
      <h2>ساعت الان : {MOMENT_JALAALI().format("HH:mm")}</h2>
      <h2>ساعت الان : {newTime}</h2>
    </div>
  );
};

export default MomentPage;
