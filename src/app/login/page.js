"use client"
import React, { useState } from 'react';
import axios from 'axios';

export default function LogIn() {
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
                <h2 className="text-2xl text-center font-bold mb-4">Login</h2>
                <form onSubmit={handleRegister}>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
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
                        className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-8 rounded-full justify-center shadow-lg"
                    >
                        Login
                    </button>
                    </div>
                </form>
            </div>
        </div>
    );
}