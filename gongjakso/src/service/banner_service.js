import axios from 'axios';
const BaseUrl = process.env.REACT_APP_BASE_URL;

export const getProjectBanner = async () => {
    const reqURL = `banner/project`;

    try {
        const response = await axios.get(`${BaseUrl}${reqURL}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
export const getContestBanner = async () => {
    const reqURL = `banner/content`;

    try {
        const response = await axios.get(`${BaseUrl}${reqURL}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
export const getMainBanner = async () => {
    const reqURL = `banner/main`;

    try {
        const response = await axios.get(`${BaseUrl}${reqURL}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
