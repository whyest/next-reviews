"use client";
import { noSSR } from "next/dynamic";
import { useState } from "react";
const ShareLinkButton = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    navigator.clipboard.writeText(window.location.href);
    setClicked(true);
    setTimeout(() => setClicked(false), 2000);
  };
  return (
    <button
      className="rounded border px-2 py-1 text-sm capitalize text-slate-500 duration-200 hover:bg-orange-100 hover:text-slate-700"
      onClick={handleClick}
    >
      {clicked ? "link copied!" : "share link"}
    </button>
  );
};
export default ShareLinkButton;
