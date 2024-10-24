import React from "react";

function FormInput({
  register,
  handleSubmit,
  errors,
  onSubmit,
  setUser,
  setChangeEvent,
}) {
  async function onSubmit(dataUser) {
    setChangeEvent(true);
    const newRegister = {
      data: {
        avatar: "https://cdn.fakercloud.com/avatars/ManikRathee_128.jpg",
        firstName: dataUser["first_name"],
        lastName: dataUser["last_name"],
        email: dataUser["email"],
        position: "Front End Engineer",
        dateJoin: "2024-10-24",
        location: [
          {
            address: dataUser["address"],
            city: dataUser["city"],
            district: dataUser["district"],
          },
        ],
      },
    };
    const res = await fetch(
      "https://tony-auth-express-vdee-6j0s-fhovok9bu.vercel.app/api/member",
      {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(newRegister),
      }
    );
    const data = await res.json();
    setUser((prevState) => {
      return [...prevState, data];
    });
    setChangeEvent(false);
  }
  return (
    <>
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
          <form onSubmit={handleSubmit(onSubmit)} class="lg:col-span-2">
            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
              <div class="md:col-span-3">
                <label for="first_name">First Name</label>
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  {...register("first_name", {
                    required: "This is required!",
                    minLength: {
                      value: 10,
                      message: "This min field is 10!",
                    },
                  })}
                  class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                />
                {errors.first_name && (
                  <div className="text-red-500">
                    {errors.first_name.message}
                  </div>
                )}
              </div>
              <div class="md:col-span-2">
                <label for="last_name">Last Name</label>
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  {...register("last_name", {
                    required: "This is required!",
                    minLength: {
                      value: 10,
                      message: "This min field is 10!",
                    },
                  })}
                  class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                />
                {errors.last_name && (
                  <div className="text-red-500">{errors.last_name.message}</div>
                )}
              </div>

              <div class="md:col-span-5">
                <label for="email">Email Address</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  placeholder="email@domain.com"
                  {...register("email", {
                    required: "This is required!",
                    pattern: {
                      value: /\b[A-Z0-9._%+-]+@gmail\.com\b/i,
                      message: "Email muse end with @gmail.com",
                    },
                  })}
                />
                {errors.email && (
                  <div className="text-red-500">{errors.email.message}</div>
                )}
              </div>

              <div class="md:col-span-5">
                <label for="address">Address</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  placeholder=""
                  {...register("address", {
                    required: "This is required!",
                  })}
                />
                {errors.address && (
                  <div className="text-red-500">{errors.address.message}</div>
                )}
              </div>

              <div class="md:col-span-3">
                <label for="city">City</label>
                <select
                  id="city"
                  class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  {...register("city")}
                >
                  <option selected>Choose City</option>
                  <option value="Thành Phố Hồ Chí Minh">
                    Thành Phố Hồ Chí Minh
                  </option>
                  <option value="Hà Nội">Hà Nội</option>
                  <option value="Đà Nẵng">Đà Nẵng</option>
                </select>
              </div>

              <div class="md:col-span-2">
                <label for="district">District</label>
                <select
                  id="district"
                  class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  {...register("district")}
                >
                  <option selected>Choose District</option>
                  <option value="Tân Phú">Tân Phú</option>
                  <option value="Phú Nhuận">Phú Nhuận</option>
                  <option value="Hoàng Mai">Hoàng Mai</option>
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
          </form>
        </div>
      </div>
    </>
  );
}

export default FormInput;
