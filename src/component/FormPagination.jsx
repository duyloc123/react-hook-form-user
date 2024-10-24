import React from "react";

function FormPagination({
  user,
  setCurrentPage,
}) {
  function NextPage(){
    setCurrentPage(prev => prev + 1);
  }

  function PrevPage() {
    setCurrentPage((prev) => prev - 1);
  }

  return (
    <>
      <div class="flex flex-row gap-2 justify-end items-center mt-6">
        <span class="text-sm text-gray-700 ">
          Showing{" "}
          <span class="font-semibold text-gray-900">{user.length} </span>
          Entries
        </span>
        <div class="inline-flex xs:mt-0">
          <button
            class="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-blue-800 rounded-s hover:bg-blue-900"
            onClick={() => PrevPage()}
          >
            <svg
              class="w-3.5 h-3.5 me-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 5H1m0 0 4 4M1 5l4-4"
              />
            </svg>
            Prev
          </button>
          <button
            type="button"
            onClick={() => NextPage()}
            class="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-blue-800 border-0 border-s border-gray-700 rounded-e hover:bg-blue-900"
          >
            Next
            <svg
              class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default FormPagination;
