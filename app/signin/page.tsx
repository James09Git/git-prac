import React from "react";

const page = () => {
  return (
    <div>
      <div className="p-3">
        <form className="">
          <div className="p-2 border flex flex-col gap-3 w-[400px] rounded-sm">
            <div className="border-b pb-2">
              <h1 className="font-semibold text-[15px]">Registeration Form</h1>
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-[12px]">Name</label>
              <input
                className="border outline-none rounded-sm p-1"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-[12px] ">Email</label>
              <input
                className="border outline-none rounded-sm p-1"
                type="text"
              />
            </div>
            <div className="flex justify-center items-center">
              <button className="p-1 bg-blue-900 rounded-sm px-2 py-1 text-white font-semibold text-[14px]">
                Click
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
