import { Link } from "react-router-dom";
import useRegisterHooks from "./hooks/loginHooks"
import "./register.css";
import PrivacyPolicy from "../../component/privacypolicy/PrivacyPolicy";

const LogIn = () => {
    const { handleForm, handleInput,isFormInvalid , Isloading,setVisible,visible, countries, user } = useRegisterHooks()

    return (
        <>
            <div className="resCon">
                <h5>MY ACCOUNT</h5>
                <form onSubmit={handleForm}>
                    <div>Log in Here</div>

                    <div className="inplab">
                        <label htmlFor="email">Email Address</label>
                        <input id="email" name="email" type="email" placeholder="atexaple@gmail.com" onInput={handleInput} />
                    </div>

                    <div className="inplab">
                        <label htmlFor="password">Password</label>
                        <input id="password" name="password" type="text" placeholder="password" onInput={handleInput} />
                    </div>

                    {user.password && user.cpassword && user.password !== user.cpassword && (
                        <p className="error">Passwords do not match</p>
                    )}

                    <br /><br />    

                    <div className="btn">
                        <button disabled={isFormInvalid || Isloading} type="submit">
                            {Isloading ? (
                                <>
                                    <span className="spinner"></span> Registering...
                                </>
                            ) : (
                                "Register"
                            )}
                        </button>
                    </div>

                </form>
            </div>
        </>
    );
};

export default LogIn;
