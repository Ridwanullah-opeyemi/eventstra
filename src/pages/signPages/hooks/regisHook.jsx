import { useState, useEffect } from "react";

const useRegisterHooks = ()=>{
    const [countries, setCountries] = useState([]);
    const [Isloading, setIsloading] = useState(false);  
    const [visible, setVisible] = useState(false);


    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: ""
    });



    const handleInput = (e) => {
        const { value, name } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    };

    const baseUrl = "http://localhost:3001/signUp"
    const addUser = async (userData) => {
        setIsloading(true)
        try {
            const res = await fetch(baseUrl, ({
                method: 'POST',
                body: JSON.stringify(userData),
                headers: {
                    "Content-Type": "application/json",
                }
            }))
            if (!res.ok) {
                console.log("error occour");
                return
            }
            const data = await res.json()
            console.log("data", data);
            setVisible(true);
            
        } catch (error) {
            console.log(error);
        }
    }

    const handleForm = (e) => {
        e.preventDefault();

        if (isFormInvalid) return;

        setIsloading(true);

        setTimeout(() => {
            addUser(user)
            // console.log("Form submitted:", user);
            setIsloading(false);
        }, 2000);

    };

    const isFormInvalid =
        !user.name ||
        !user.email ||
        !user.password ||
        !user.cpassword ||
        user.password !== user.cpassword;

    return{
        handleForm,
        handleInput,
        isFormInvalid,
        Isloading,
        countries,
        user,
        visible,
        setVisible
    }
}

export default useRegisterHooks;