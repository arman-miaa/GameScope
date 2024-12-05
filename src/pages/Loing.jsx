import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const Loing = () => {
  const { signInUser, sigInWithGoogle, setUsers } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        setUsers(result.user);
        console.log(result.user);

        // last login time
        const lastLogInTime = result?.user?.metadata?.lastSignInTime;
        console.log(lastLogInTime);
        const logInInfo = { email, lastLogInTime };
        fetch("https://ph-assignment10-server-lilac.vercel.app/person", {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(logInInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      })
      .catch((error) => {
        toast.error("Invalid email or password please try again");
      });
  };

  const handleSignInUserWithGoogle = () => {
    console.log("clicked on google");
    sigInWithGoogle().then((result) => {
      console.log(result.user);
      toast.success("loggin success");
    });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-center">Login now!</h1>
          <p className="py-6 w-1/2 text-center mx-auto">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  LogIn With Google
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
              <div className="mx-auto mt-2">
                <h3
                  onClick={handleSignInUserWithGoogle}
                  className="btn border-2 border-blue-500"
                >
                  LogIn With Google
                </h3>
              </div>
              <p>
                Don't Have You An Account{" "}
                <Link to="/signup" className="text-red-500 underline">
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Loing;
