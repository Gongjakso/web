import axiosInstance from './axiosInstance';

export const postPosting = async postContent => {
    const reqURL = `post`;

    try {
        const response = await axiosInstance.post(reqURL, {
            ...postContent,
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
