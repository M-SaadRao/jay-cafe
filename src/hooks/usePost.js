import { useState } from 'react';
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const usePost = () => {
    const [loading, setLoading] = useState(false);

    const post = async (endpoint, payload) => {
        setLoading(true);
        try {
            const response = await axios.post(`${BASE_URL}${endpoint}`, payload);
            setLoading(false);
            return response.data;  // Returning the response data directly
        } catch (error) {
            setLoading(false);
            // Optionally, handle errors more gracefully and pass them along
            return { error: error.message || "An error occurred" };
        }
    };

    return { post, loading };
};

export default usePost;
