"use client";
import { useState } from "react";
import axios from "axios";

export default function Home() {
    const BASE_URL = "http://localhost:5000/api/v1/mongodb/blogs";
    const Firebase_URl = "http://localhost:5000/api/v1/blogs";

    const [blogs, setBlogs] = useState([]);
    const [blog, setBlog] = useState(null);
    const [firebaseData, setFirebaseData] = useState([]);
    const [message, setMessage] = useState("");

    // MongoDB API Functions
    const addMongoBlog = async () => {
        try {
            const response = await axios.post(`${BASE_URL}/add`, {
                title: "Sample",
                content: "This a sample blog content.",
                author: "Ayush Khatri",
                blogId: "123445",
            });
            setMessage("Blog added successfully!");
            console.log(response.data);
        } catch (error) {
            console.error("Error adding blog:", error);
            setMessage("Error adding blog.");
        }
    };

    const getAllMongoBlogs = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/getall`);
            setBlogs(response.data);
            console.log("All blogs:", response.data);
        } catch (error) {
            console.error("Error fetching blogs:", error);
        }
    };

    const getMongoBlogById = async (id) => {
        try {
            const response = await axios.get(`${BASE_URL}/get/${id}`);
            setBlog(response.data);
            console.log("Fetched blog:", response.data);
        } catch (error) {
            console.error("Error fetching blog by ID:", error);
        }
    };

    const updateMongoBlogById = async (id) => {
        try {
            const response = await axios.put(`${BASE_URL}/update/${id}`, {
                title: "Updated Blog Title",
                content: "Updated content for the blog.",
                author: "Updated author",
            });
            setMessage("Blog updated successfully!");
            console.log(response.data);
        } catch (error) {
            console.error("Error updating blog:", error);
            setMessage("Error updating blog.");
        }
    };

    const deleteMongoBlogById = async (id) => {
        try {
            await axios.delete(`${BASE_URL}/delete/${id}`);
            setMessage("Blog deleted successfully!");
            console.log("Blog deleted:", id);
        } catch (error) {
            console.error("Error deleting blog:", error);
            setMessage("Error deleting blog.");
        }
    };

    // Firebase API Functions
    const getFirebaseData = async () => {
        try {
            const response = await axios.get(
                `${Firebase_URl}/firebase/get/data`
            );
            setFirebaseData(response.data);
            console.log("Firebase data:", response.data);
        } catch (error) {
            console.error("Error fetching Firebase data:", error);
        }
    };

    const addFirebaseData = async () => {
        try {
            const response = await axios.post(
                `${Firebase_URl}/firebase/add/data`,
                {
                    data: {
                        author: "dsfsdf Drewoe",
                        title: "Understanding Firebase df",
                        content: "This is a blog about Firebase Firestore.",
                    },
                }
            );
            setMessage("Firebase data added successfully!");
            console.log(response.data);
        } catch (error) {
            console.error("Error adding Firebase data:", error);
            setMessage("Error adding Firebase data.");
        }
    };

    const updateFirebaseData = async () => {
        try {
            const response = await axios.post(
                `${Firebase_URl}/firebase/update/data/`,
                {
                    key: "sampleKey",
                    value: "updatedValue",
                }
            );
            setMessage("Firebase data updated successfully!");
            console.log(response.data);
        } catch (error) {
            console.error("Error updating Firebase data:", error);
            setMessage("Error updating Firebase data.");
        }
    };

    return (
        <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
                Blog Management
            </h1>

            <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800">
                    MongoDB API
                </h2>
                <div className="space-x-4">
                    <button
                        onClick={addMongoBlog}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Add Blog
                    </button>
                    <button
                        onClick={getAllMongoBlogs}
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                    >
                        Get All Blogs
                    </button>
                    <button
                        onClick={() =>
                            getMongoBlogById("6742e12a43a045980f568a3e")
                        }
                        className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                    >
                        Get Blog By ID
                    </button>
                    <button
                        onClick={() =>
                            updateMongoBlogById("6742e12a43a045980f568a3e")
                        }
                        className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
                    >
                        Update Blog By ID
                    </button>
                    <button
                        onClick={() =>
                            deleteMongoBlogById("6742e12a43a045980f568a3e")
                        }
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                        Delete Blog By ID
                    </button>
                </div>
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800">
                    Firebase API
                </h2>
                <div className="space-x-4">
                    <button
                        onClick={getFirebaseData}
                        className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
                    >
                        Get Firebase Data
                    </button>
                    <button
                        onClick={addFirebaseData}
                        className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600"
                    >
                        Add Firebase Data
                    </button>
                    <button
                        onClick={updateFirebaseData}
                        className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
                    >
                        Update Firebase Data
                    </button>
                </div>
            </div>

            <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-700">
                    Message:
                </h3>
                <p className="text-lg text-blue-700">{message}</p>
            </div>

            <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-700">Blogs:</h3>
                <pre className="bg-gray-200 p-4 rounded">
                    {JSON.stringify(blogs, null, 2)}
                </pre>
            </div>

            <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-700">
                    Single Blog:
                </h3>
                <pre className="bg-gray-200 p-4 rounded">
                    {JSON.stringify(blog, null, 2)}
                </pre>
            </div>

            <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-700">
                    Firebase Data:
                </h3>
                <pre className="bg-gray-200 p-4 rounded">
                    {JSON.stringify(firebaseData, null, 2)}
                </pre>
            </div>
        </div>
    );
}
