"use client"
import React from "react";
import {Link} from "react-router-dom";
import "./dashboardCSS.css";


const Dashboard = () => {
    return (
        <html>
            <section className={"dropdown_menu"}>
                <nav id={"navbar"} className={"navigation"} role={"navigation"}>
                    <input id={"toggle_menu"} type={"checkbox"}/>
                    <div className={"container_top_dashboard"}>
                        <div className={"header_image"}></div>
                        <h1 className={"homepage_header"}>Welcome</h1>
                    </div>
                    <nav className={"menu1"}>
                        <a className={"current_link"} id={"current_tab"}>Home</a>
                        <Link to={"/login"} className={"link1"}>Login</Link>
                        <a className={"link1"} href="">AI and Machine Learning</a>
                        <a className={"link1"} href="">About me</a>
                        <a className={"link1"} href={""}>Software Engineering</a>
                    </nav>
                </nav>
            </section>
            <section className={"text_guidance"}>
                <div>If you already have an existing account, sign in here. </div>
                <div>If you don't have an account, create one here. </div>
                <div>Are you a customer or client? Click here to login as a guest.</div>
            </section>
                <section className={"dashboard_buttons"}>
                    <Link  to={"./login"} className={"dashboard_button"}>
                        <div className="login_tile">
                            <h1 className="tile_text">Login</h1>
                        </div>
                    </Link>
                    <Link className={"dashboard_button"}>
                        <div className="create_account_tile">
                            <h1 className="tile_text">Create account</h1>
                        </div>
                    </Link>
                    <Link className={"dashboard_button"}>
                        <div className={"customer_login_tile"}>
                            <h1 className={"tile_text"}>Customer login</h1>
                        </div>
                    </Link>
                </section>
        </html>
    );
};

export default Dashboard;