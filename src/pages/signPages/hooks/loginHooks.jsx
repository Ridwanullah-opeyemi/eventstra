import { useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";

const useRegisterHooks = () => {
    const [Isloading, setIsloading] = useState(false);
    const [visible, setVisible] = useState(false);
    const [user, setUser] = useState({ email: "", password: "" });
    const { setIsLoggedIn } = useAuth(); // ✅ GLOBAL LOGIN
    let userName;

    const baseUrl = "https://enentstar.onrender.com/signIn";

    const signInUser = async (userData) => {
        try {
            const res = await fetch(baseUrl, {
                method: "POST",
                body: JSON.stringify(userData),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const data = await res.json();

            if (!res.ok) {
                console.error("Server error:", data);
                return;
            }

            console.log("Full response data:", data);

            if (data.user && data.token) {
                console.log("User:", data.user);
                console.log("Token:", data.token);
                userName = data.user.name;

                // Save to localStorage
                localStorage.setItem("token", data.token);
                localStorage.setItem("user", JSON.stringify(data.user));

                // Set isLoggedIn to true
                setIsLoggedIn(true);

                // Redirect after setting isLoggedIn
                window.location.replace("http://localhost:5173");
            } else {
                console.warn("Missing user or token in response.");
            }

        } catch (error) {
            console.error("Fetch error:", error);
        }
    };

    const handleInput = (e) => {
        const { value, name } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    };

    const handleForm = (e) => {
        e.preventDefault();
        if (isFormInvalid) return;

        setIsloading(true);

        // Delay the sign-in process (simulate loading)
        setTimeout(() => {
            signInUser(user);
            setIsloading(false);
        }, 2000); // Simulate a 2-second delay before calling the sign-in function
    };

    const isFormInvalid = !user.email || !user.password;

    return {
        handleForm,
        handleInput,
        isFormInvalid,
        Isloading,
        user,
        visible,
        setVisible,
        userName
    };
};

export default useRegisterHooks;
