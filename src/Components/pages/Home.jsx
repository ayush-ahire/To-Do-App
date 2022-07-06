import React from "react";
import Tasksbar from "../Tasksbar";

function Home() {
  return (
    <div className="flex justify-center grid-cols-1 w-auto h-screen mt-5">
      <div className="col-start-2 col-span-4  xd:grid-cols-4 lg:grid-cols-3 gap-4 md:grid-cols-1 w-auto ">
        <Tasksbar />
      </div>
    </div>
  );
}

export default Home;
