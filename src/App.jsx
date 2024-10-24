import FormInput from "./component/FormInput";
import FormList from "./component/FormList";
import FormPagination from "./component/FormPagination";
import React from "react";
import { useForm } from "react-hook-form";

function App() {
  const [user, setUser] = React.useState([]);
  const form = useForm();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = form;

  const [changeEvent,setChangeEvent] = React.useState(false);
  const [currentPage,setCurrentPage] = React.useState(1);
  const [loading, setLoading] = React.useState(false);

  async function DeleteUser(id) {
    setChangeEvent(true);
    const rs = await fetch(
      `https://tony-auth-express-vdee-6j0s-fhovok9bu.vercel.app/api/member/${id}`,
      {
        method: "delete",
      }
    );
    const data = await rs.json();
    setUser((prevState) => {
      return prevState.map((item) =>
        item._id !== id ? [...user, data] : item
      );
    });
    setChangeEvent(false);
  }

  async function UpdateUser(id) {
    setChangeEvent(true);
    const index = user.findIndex((item) => item._id === id);
    const userIndex = {
      data: {
        ...user[index],
        firstName: watch("first_name"),
        lastName: watch("last_name"),
        email: watch("email"),
      },
    };

    const rs = await fetch(
      `https://tony-auth-express-vdee-6j0s-fhovok9bu.vercel.app/api/member/${id}`,
      {
        method: "put",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(userIndex),
      }
    );
    const data = await rs.json();
    setUser((prevState) => {
      return prevState.map(() => [...prevState, data]);
    });
    setChangeEvent(false);
  }

  return (
    <>
      <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div class="container max-w-screen-lg mx-auto">
          <div>
            <FormInput
              register={register}
              handleSubmit={handleSubmit}
              errors={errors}
              setUser={setUser}
              setChangeEvent = {setChangeEvent}
              setLoading = {setLoading}
            />
            <FormList
              user={user}
              setUser={setUser}
              DeleteUser={DeleteUser}
              UpdateUser={UpdateUser}
              changeEvent = {changeEvent}
              currentPage = {currentPage}
              loading = {loading}
              setLoading = {setLoading}
            />
            <FormPagination
              user = {user}
              currentPage = {currentPage}
              setCurrentPage = {setCurrentPage}
              setChangeEvent = {setChangeEvent}
              changeEvent = {changeEvent}
              setLoading = {setLoading}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
