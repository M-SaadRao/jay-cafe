import { useEffect, useState } from 'react';
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

// Create an Axios instance with cache-busting headers
const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Cache-Control': 'no-store',
        'Pragma': 'no-cache',
        'Expires': '0',
    },
});

const useGet = (endpoint) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            if (!endpoint) return;

            setLoading(true);
            setError(null);

            try {
                // Add a random query parameter to the URL to bypass cache
                const url = `${BASE_URL}${endpoint}?_=${new Date().getTime()}`;
                const response = await axiosInstance.get(url);
                setData(response.data);
            } catch (err) {
                const errorMessage = err.response?.data?.message || err.message || "Something went wrong";
                setError(errorMessage);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [endpoint]);

    return { data, loading, error };
};

export default useGet;