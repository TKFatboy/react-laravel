import axios from "axios";
import { useRef } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axiosClient";
import { useStateContext } from "../contexts/contextprovider";

export default function register(){

    const nameRef = useRef();
    const addressRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const Submit =  (ev) =>{
        ev.preventDefault();
        const payload = {
            name: nameRef.current.value,
            address: addressRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }
       console.log(payload)
}

    return(
        <div className="login-signup-form animated fadeinDown">
            <div className="form">
                <h1 className="title">
                    สร้างบัญชีใหม่
                </h1>
                <form onSubmit={Submit}>
                    <input ref={nameRef} type="name" placeholder="ชื่อ-นามสกุล" />
                    <input ref={addressRef} type="address" placeholder="ที่อยู่" />
                    <input ref={emailRef} type="email" placeholder="Email" />
                    <input ref={passwordRef} type="password" placeholder="Password" />
                    <button className="btn btn-block">ลงทะเบียน</button>
                    <p className="message">
                        มีบัญชีอยู่แล้วใช่ไหม? <Link to= '/login'>เข้าสู่ระบบ</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}