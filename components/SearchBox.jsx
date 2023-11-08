"use client";
import { Combobox } from "@headlessui/react";
import { useIsClient } from "@/lib/hooks";

const SearchBox = () => {
  const isClient = useIsClient();
  //   console.log("[Searchbox isClient]:", isClient);
  if (!isClient) {
    return null;
  }
  return (
    <Combobox>
      <Combobox.Input placeholder="Search..." />
    </Combobox>
  );
};
export default SearchBox;
