import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
const PaginationBar = ({ href, page, pageCount }) => {
  return (
    <div className="flex items-center gap-2 pb-3">
      <Paginationlink href={`${href}?page=${page - 1}`} enabled={page > 1}>
        <ChevronLeftIcon className="h-4 w-5" />
        <span className="sr-only">Previous Page</span>
      </Paginationlink>
      <span>
        Page {page} of {pageCount}
      </span>
      <Paginationlink
        href={`${href}?page=${page + 1}`}
        enabled={page < pageCount}
      >
        <ChevronRightIcon className="h-4 w-5" />
        <span className="sr-only">Next Page</span>
      </Paginationlink>
    </div>
  );
};
export default PaginationBar;

function Paginationlink({ children, href, enabled }) {
  if (!enabled) {
    return (
      <span className="cursor-not-allowed rounded border text-sm text-slate-300">
        {children}
      </span>
    );
  }
  return (
    <Link
      href={href}
      className="rounded border text-sm text-slate-500
                  hover:bg-orange-100 hover:text-slate-700"
    >
      {children}
    </Link>
  );
}
