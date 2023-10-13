"use client";
import { useState } from "react";
import { LinkIcon } from "@heroicons/react/20/solid";

const ShareLinkButton = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    navigator.clipboard.writeText(window.location.href);
    setClicked(true);
    setTimeout(() => setClicked(false), 2000);
  };
  return (
    <button
      className="flex items-center gap-1 rounded border px-2 py-1 text-sm capitalize text-slate-500 duration-200 hover:bg-orange-100 hover:text-slate-700"
      onClick={handleClick}
    >
      <LinkIcon className="h4 w-4" />
      {clicked ? "link copied!" : "share link"}
    </button>
  );
};
export default ShareLinkButton;
