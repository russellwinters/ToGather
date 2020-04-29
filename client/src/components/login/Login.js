import React, {useEffect} from 'react'
import socketIOClient from "socket.io-client";
import axios from 'axios'

const ENDPOINT = "http://localhost:5000";
const socket = socketIOClient(ENDPOINT);
export default function login() {
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
        }
        console.log(log);
    };

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
