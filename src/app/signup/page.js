"use client"
import React, { useState } from 'react';
import axios from 'axios';

export default function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();

        axios
            .post('http://localhost:5000/register', { username, email, password })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error('Error registering user:', error);
            });
    };
    return (
        <div className=" text-white h-screen flex items-center justify-center">
            <div className="p-8 bg-gray-900 rounded shadow-md w-96">
                <h2 className="text-2xl text-center font-bold mb-4">Register</h2>
                <form onSubmit={handleRegister}>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="User Name"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="border p-3 w-full bg-gray-800 text-white rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border p-3 w-full bg-gray-800 text-white rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="border p-3 w-full bg-gray-800 text-white rounded"
                        />
                    </div>
                    <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-pink-500 text-center hover:bg-pink-600 text-white font-bold py-4 px-8 rounded-full shadow-lg"
                    >
                        Register
                    </button>
                    </div>
                </form>
            </div>
        </div>
    );
}