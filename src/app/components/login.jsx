"use client"
import React, { useEffect } from "react";
import {Link} from "react-router-dom";
import "./loginCSS.css"

const Login = () => {

    useEffect(() => {
        const handleLoad = () => {
        document.documentElement.classList.remove("preload");
        };
        console.log("Componenet mounted")
    
        document.addEventListener("DOMContentLoaded", handleLoad);
    
        return () => {
        document.removeEventListener("DOMContentLoaded", handleLoad);
        };
    }, []);

    return (
        <html className="preload">
            <section className={"dropdown_menu"}>
                <nav id={"navbar"} className={"navigation"} role={"navigation"}>
                    <input id={"toggle_menu"} type={"checkbox"}/>
                    <div className={"container_top"}>
                        <label className={"three_lines"} htmlFor={"toggle_menu"}>
                            <div className={"top"}></div>
                            <div className={"meat"}></div>
                            <div className={"bottom"}></div>
                        </label>
                        <h1 className={"login_header"}>Login</h1>
                    </div>

                    <nav className={"menu1"}>
                        <Link to={"/"} className={"link1"}>Dashboard</Link>
                        <a className={"link1"} href="">Create account</a>
                        <a className={"link1"} href="">Customer Login</a>
                    </nav>
                </nav>
            </section>
            <div className="login_body">
            <form action="" class="log-in" autocomplete="off"> 
                <h4>L&G<span> staff login</span></h4>
                <p>Welcome back! Please enter your personal credentials</p>
                <div className="divder"></div>
                <div class="floating-label">
                    <input placeholder="Email" type="text" name="email" id="email" autocomplete="off"/>
                </div>
                <div class="floating-label">
                    <input placeholder="Password" type="password" name="password" id="password" autocomplete="off"/>
                </div>
                <button type="submit" onClick="return false;">Log in</button>
                <a href="" class="discrete" target="_blank">Forgot your password?</a>
            </form>
        </div>
        </html>
    )
}

export default Login;
