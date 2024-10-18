function App() {
  return (
    <>
      <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div class="container max-w-screen-lg mx-auto">
          <div>
            <h2 class="font-semibold text-xl text-gray-600">Responsive Form</h2>
            <p class="text-gray-500 mb-6">
              Form is mobile responsive. Give it a try.
            </p>

            <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div class="text-gray-600">
                  <p class="font-medium text-lg">Personal Details</p>
                  <p>Please fill out all the fields.</p>
                </div>

                <div class="lg:col-span-2">
                  <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div class="md:col-span-3">
                      <label for="first_name">First Name</label>
                      <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                    </div>
                    <div class="md:col-span-2">
                      <label for="last_name">Last Name</label>
                      <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                    </div>

                    <div class="md:col-span-5">
                      <label for="email">Email Address</label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="email@domain.com"
                      />
                    </div>

                    <div class="md:col-span-5">
                      <label for="address">Address</label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder=""
                      />
                    </div>

                    <div class="md:col-span-3">
                      <label for="city">City</label>
                      <select
                        id="city"
                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      >
                        <option selected>Choose City</option>
                        <option value="tphcm">TP.Hồ Chí Minh</option>
                        <option value="dn">Đà Nẵng</option>
                        <option value="hn">Hà Nội</option>
                        <option value="hp">Hải Phòng</option>
                      </select>
                    </div>

                    <div class="md:col-span-2">
                      <label for="district">District</label>
                      <select
                        id="district"
                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      >
                        <option selected>Choose District</option>
                        <option value="q1">Quận 1</option>
                        <option value="q2">Quận 2</option>
                        <option value="q3">Quận 3</option>
                        <option value="q4">Quận 4</option>
                      </select>
                    </div>

                    <div class="md:col-span-5 text-right">
                      <div class="inline-flex items-end">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="">
              <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                  <table class="w-full text-sm text-left text-gray-500">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                      <tr>
                        <th scope="col" class="py-3 px-6">
                          First Name
                        </th>
                        <th scope="col" class="py-3 px-6">
                          Last Name
                        </th>
                        <th scope="col" class="py-3 px-6">
                          Email Address
                        </th>
                        <th scope="col" class="py-3 px-6">
                          Address
                        </th>
                        <th scope="col" class="py-3 px-6">
                          City
                        </th>
                        <th scope="col" class="py-3 px-6">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="bg-white border-b  ">
                        <td class="py-4 px-6">Duy Loc</td>
                        <td class="py-4 px-6">Phan</td>
                        <td class="py-4 px-6">loc123456000@gmail.com</td>
                        <td class="py-4 px-6">249 Vườn lài</td>
                        <td class="py-4 px-6">TP.HCM</td>
                        <td class="py-4 px-6">
                          <button
                            type="button"
                            class="focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div class="flex flex-row gap-2 justify-end items-center mt-6">
              <span class="text-sm text-gray-700 ">
                Showing <span class="font-semibold text-gray-900">0 </span>
                Entries
              </span>
              <div class="inline-flex xs:mt-0">
                <button class="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-blue-800 rounded-s hover:bg-blue-900 ">
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
                <button class="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-blue-800 border-0 border-s border-gray-700 rounded-e hover:bg-blue-900 ">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
