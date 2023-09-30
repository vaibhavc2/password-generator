import React from "react";

const CopyAlert = ({ id }: { id: string }) => {
  return (
    <div
      id={id}
      className="invisible absolute left-[72%] top-[40%] z-10 animate-pulse rounded-md border border-gray-100 bg-gray-100 bg-opacity-40 bg-clip-padding px-3 py-3 text-lg text-black backdrop-blur-sm backdrop-filter sm:left-[81.5%] sm:top-[50%]"
    >
      copied!
    </div>
  );
};

export default CopyAlert;
