import React from "react";

const page = () => {
  return (
    <div>
      <div className="p-3">
        <form className="">
          <div className="p-2 border flex flex-col gap-3 w-[400px]">
            <div className="flex flex-col gap-1">
              <label>Name</label>
              <input className="border" type="text" />
            </div>
            <div className="flex flex-col gap-1">
              <label>Email</label>
              <input className="border" type="text" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
