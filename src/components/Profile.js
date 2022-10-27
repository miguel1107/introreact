import { useEffect, useState } from "react";
import { getProfile } from "../service/data-service";

function Profile({logout}) {
  const [profile, setprofile] = useState({avatar:"",name:"",bio:""})

  useEffect(() => {
    getProfile().then((data) => {
      window.setTimeout(() => {
        console.log(data);
        setprofile(data);
      }, 0);
    });
  }, []);

  return (
    <div
      className="card d-flex justify-content-center text-center border-0"
      style={{ width: "18rem" }}
    >
      <img
        src={profile.avatar}
        className="card-img-top rounded-circle"
        alt="imagen"
      />
      <div className="card-body">
        <div className="row">
          <div className="col-md-12">
            <p className="card-text">
              <strong> @{profile.name} </strong>
            </p>
          </div>
          <div className="col-md-12">
            <p className="card-text">
             {profile.bio}
            </p>
          </div>
          <div className="col-md-12">
            <button onClick={logout} className="btn btn-danger btn-sm w-100">
              <i className="fas fa-close"></i> Cerrar sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
