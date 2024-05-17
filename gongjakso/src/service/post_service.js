import axiosInstance from './axiosInstance';
import axios from 'axios';
const BaseUrl = process.env.REACT_APP_BASE_URL;

export const postPosting = async postContent => {
    const reqURL = `post`;

    try {
        const response = await axiosInstance.post(reqURL, {
            ...postContent,
        });
        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
        return error.response.data.code;
    }
};

export const getPostDetail = async (id, role) => {
    const reqURL = `post/read?id=${id}&role=${role}`;

    try {
        const response = await axiosInstance.get(reqURL);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getCheckStatus = async id => {
    const reqURL = `post/check/${id}`;

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
    selectedCityData,
    selectedTownData,
    selectedStack,
    searchKeyword,
) => {
    const reqURL = `post/project?meetingCity=${selectedCityData}&meetingTown=${selectedTownData}&stackName=${selectedStack}&searchWord=${searchKeyword}&page=${pageNum}&sort=${sort}`;

    try {
        const response = await axios.get(`${BaseUrl}${reqURL}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
export const getContestPosts = async (
    pageNum,
    sort,
    selectedCityData,
    selectedTownData,
    searchKeyword,
) => {
    const reqURL = `post/contest?meetingCity=${selectedCityData}&meetingTown=${selectedTownData}&category=&searchWord=${searchKeyword}&page=${pageNum}&sort=${sort}`;

    try {
        const response = await axios.get(`${BaseUrl}${reqURL}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
