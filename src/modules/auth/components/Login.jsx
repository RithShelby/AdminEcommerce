import { useState } from "react";
import { useAuth } from "../core/hook";
import {useSweetAlert} from "../../SweetAlert";

const Login = () => {
  const {SuccessAlert} = useSweetAlert();
  const [payload, setPayload] = useState({
    username: "JohnAdmin2700",
    password: "12345",
  });

  const { onLogin } = useAuth();

  const handleChange = (e) => {
    setPayload({
      ...payload,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(payload);
    onLogin(payload);
    SuccessAlert(
        {title : "Login Success!",text :"Welcome Back Admin✌️"},
    );
  };

  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="" style={{ borderRadius: "1rem" }}>
              <form
                onSubmit={handleSubmit}
                className="card-body  p-5 d-flex flex-column rounded"
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
                }}
              >
                <h3 className="mb-5 text-center fs-1 ">Login</h3>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="typeEmailX-2">
                    Username
                  </label>
                  <input
                    type="username"
                    id="typeEmailX-2"
                    className="form-control form-control-md"
                    name="username"
                    onChange={handleChange}
                    placeholder="Username..."
                    value={payload.username}
                  />
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="typePasswordX-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="typePasswordX-2"
                    className="form-control form-control-md"
                    name="password"
                    onChange={handleChange}
                    placeholder="Password..."
                    value={payload.password}
                  />
                </div>
                {/* Checkbox */}
                <button
                  className="btn btn-primary m-auto text-center w-75 py-2 rounded"
                  type="submit"
                >
                  Login
                </button>
                <hr className="my-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
