
import { ReactNode } from "react";
interface Data {
  children: ReactNode;
}
function container(data: Data) {
  return (
    <div className="my-8  ">
      <div className="grid grid-cols-4 w-[calc(100vw-7rem)] m-auto gap-4 my-4 ">
        {data.children}
      </div>
    </div>
  );
}

export default container;
