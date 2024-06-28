import React from "react";

function PhotoModal({ params: { id } }: { params: { id: string } }) {
  return <div className="w-full">{id || "asdf"}</div>;
}

export default PhotoModal;
