import axiosInstance from './axiosInstance';
import axios from 'axios';
const BaseUrl = process.env.REACT_APP_BASE_URL;

export const postPosting = async postContent => {
    const reqURL = `post`;

    try {
        const response = await axiosInstance.post(reqURL, {
            ...postContent,
        });
        return response?.data;
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

export const getScrap = async id => {
    const reqURL = `post/scrap/${id}`;

    try {
        const response = await axiosInstance.get(reqURL);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const postApply = async (apply_id, postContent) => {
    const reqURL = `apply/${apply_id}`;

    try {
        const response = await axiosInstance.post(reqURL, {
            ...postContent,
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getProjectPosts = async (
    pageNum,
    sort,
    selectLocalData,
    selectedStack,
    searchKeyword,
) => {
    const reqURL = `post/project?meetingArea=${selectLocalData}&stackName=${selectedStack}&searchWord=${searchKeyword}&page=${pageNum}&sort=${sort},desc`;

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
export const getContestPosts = async (
    pageNum,
    sort,
    selectLocalData,
    searchKeyword,
) => {
    const reqURL = `post/contest?meetingArea=${selectLocalData}&category=&searchWord=${searchKeyword}&page=${pageNum}&sort=${sort},desc`;

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
