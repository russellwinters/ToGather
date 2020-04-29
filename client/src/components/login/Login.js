import React, {useState} from 'react';
import {Redirect} from "react-router-dom"; 
import socketIOClient from "socket.io-client";
import axios from 'axios'

const ENDPOINT = "http://localhost:5000";
const socket = socketIOClient(ENDPOINT);
export default function Login() {
    const [isRedirect, setIsRedirect] = useState(false)
    const handleSubmit = async(event) => {
        event.preventDefault();
        console.log(event.target.username.value);
        const log = await axios.post("http://localhost:5000/api/login", {
            username: event.target.username.value,
            password: event.target.password.value
        });
        console.log(log)
        if(log.status === 200) {
            socket.emit("add user", log.data.payload);
            setIsRedirect(true)
        }
        console.log(log);
    };
    if(isRedirect) {
        return (
            <Redirect to = "home" />
        )
    }
    return (
        <div>
            <form onSubmit = {(event) => handleSubmit(event) }>
                <input name = "username"></input>
                <input name = "password"></input>
                <button type = "submit">Submit</button>
            </form>
        </div>
    )
}
