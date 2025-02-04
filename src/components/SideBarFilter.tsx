"use client";

import { useState } from "react";

const SideBarFilter = () => {
  const [desible, setDesible] = useState<Boolean>(false);

  return (
    <div className="h-screen w-[25vh] fixed left-0 top-0 bg-red-300  flex flex-col justify-start gap-3 p-4 pt-[20vh]"></div>
  );
};

export default SideBarFilter;
