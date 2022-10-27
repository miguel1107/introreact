import { useState } from "react";
import { login } from "../service/data-service";

function Login({onLoginComplete}) {

  const [error, seterror] = useState(null);

    function handleSubmit(event){
        event.preventDefault();
        const form = event.target;
        login(form.username.value,form.password.value).then(data=>{
            onLoginComplete(data.token);
        }).catch((err)=>{
          seterror(err.response.data.message);
        })
    }

  return (
    <div
      className="card d-flex justify-content-center text-center border-0"
      style={{ width: "18rem" }}
    >
      <div className="card-body">
        <div className="row">
          <div className="col-md-12">
            {
              error == null? '':
              <div className="alert alert-danger">{error}</div>
            }
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="username"
                className="form-control mb-3"
                placeholder="usuario"
                />
                <input
                type="password"
                name="password"
                className="form-control mb-3"
                placeholder="contraseña"
                />
                <button type="submit" className="btn btn-success w-100">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
