import { Link } from "react-router-dom"
import { useState } from "react"

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const onPasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const login = (e) => {
        e.preventDefault();
        console.log(email, password)
    }
    return (
        <div className="login-form-box">
            <form className="login-form" onSubmit={(e) => login(e)}>
                <div className="login-title">
                    <h4>Login</h4>
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
                    <Link>Don't have an account <span className="link-color"><Link to="/signup">Signup</Link></span></Link>
                </div>
            </form>

        </div>
    )
}

export default Login;