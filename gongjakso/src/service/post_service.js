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

export const getPostDetail = async id => {
    const reqURL = `post/${id}`;

    try {
        const response = await axiosInstance.get(reqURL);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const postScrap = async id => {
    const reqURL = `post/${id}`;

    try {
        const response = await axiosInstance.post(reqURL);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const postApply = async (post_id, postContent) => {
    const reqURL = `post/${post_id}`;

    try {
        const response = await axiosInstance.post(reqURL, {
            ...postContent,
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
