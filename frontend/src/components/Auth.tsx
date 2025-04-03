import { useState, useEffect } from "react";
import { Input } from "./Input";
import { SignupInput } from "@kishantiwari/common";
import { Button } from "./Button";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { Link, useNavigate } from "react-router-dom";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        email: "",
        password: ""
    });
    const navigate = useNavigate();

    useEffect(() => {
        // Redirect to /blogs if the user is already signed in
        const token = localStorage.getItem("token");
        if (token) {
            navigate("/blogs`", { replace: true }); // Replace history to prevent going back
        }
    }, [navigate]);

    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,
                postInputs
            );
            const jwt = response.data.token;
            localStorage.setItem("token", jwt);
            localStorage.setItem("Person", response.data.name);
            navigate("/blogs", { replace: true }); // Replace history to prevent going back
        } catch (e : any) {
            if(e.response.status == 410){
                alert("Please enter email");
            } else if(e.response.status == 400){
                alert("Inputs are incorrect");
            }
             else if(e.response.status == 401){
                alert("Password required minimum length of 6");
            } else if(e.response.status == 403){
                alert("No such user found");
            } else if (e.response.status == 405) {
                alert("Name should contain minimum of 3 alphabets");
            } else if(e.response.status == 500){
                alert("Error occured");
            } else{
                alert("Error")
            }
        }
    }

    return <div className="h-screen flex justify-center items-center flex-col">
        <div className="flex flex-col ">
            <div className="text-3xl md:text-4xl font-bold">
                {type == "signup" ? "Create an account":"Enter your details"}
            </div>
            <div className="flex pt-3">
                <div className="pl-3">
                    {type == "signup" ? "Already have an account?" : "Don't have an account?"}
                    <Link to={type == "signup" ? "/signin" : '/signup'} className="underline pl-1">{type == "signup" ? "Login" : "Signup"}</Link>
                </div>
            </div>
        </div>
        <div className="mt-7 ">
            {type == "signup" ? <Input label="Username" placeholder="Enter your username" onChange={(e) => {
                setPostInputs({
                    ...postInputs,
                    name: e.target.value
                });
            }}></Input> : null}

            <Input label="Email" placeholder="hello@gmail.com" onChange={(e) => {
                setPostInputs({
                    ...postInputs,
                    email: e.target.value
                });
            }}></Input>
            <Input label="Password" type={"password"} placeholder="" onChange={(e) => {
                setPostInputs({
                    ...postInputs,
                    password: e.target.value
                });
            }}></Input>
        </div>
        <div className="m-5">
            <Button onChange={sendRequest} label={type === "signup" ? "Sign up" : "Sign in"}></Button>
        </div>
    </div>;
};
