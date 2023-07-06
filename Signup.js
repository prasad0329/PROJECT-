import { Link } from "react-router-dom"
import { useState } from "react";

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const onPasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const onFirstnameChange = (e) => {
        setFirstName(e.target.value)
    }
    const onLastnameChange = (e) => {
        setLastName(e.target.value)
    }
    const signup = (e) => {
        e.preventDefault();
        console.log(email, password, firstname, lastname)
    }
    return (
        <div className="login-form-box">
            <form className="login-form" onSubmit={(e) => signup(e)}>
                <div className="login-title">
                    <h4>Signup</h4>
                </div>
                <div className="form-group mt-3">
                    <label>First Name</label>
                    <input type="text" className="form-control mt-1" id="firstname" placeholder="Enter first name" value={firstname} onChange={(e) => onFirstnameChange(e)} />
                </div>
                <div className="form-group mt-3">
                    <label>Last Name</label>
                    <input type="text" className="form-control mt-1" id="lastname" placeholder="Enter last name" value={lastname} onChange={(e) => onLastnameChange(e)} />
                </div>
                <div className="form-group mt-3">
                    <label>Email address</label>
                    <input type="email" className="form-control mt-1" id="exampleInputEmail1" placeholder="Enter email" value={email} onChange={(e) => onEmailChange(e)} />
                </div>
                <div className="form-group mt-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control mt-1" id="exampleInputPassword1" placeholder="Enter password" value={password} onChange={(e) => onPasswordChange(e)} />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Submit</button>
                <div>
                    <Link>Already have an account <span className="link-color"><Link to="/login">Login</Link></span></Link>
                </div>
            </form>

        </div>
    )
}

export default Signup;