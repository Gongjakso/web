import axiosInstance from './axiosInstance';
import axios from 'axios';

const BaseUrl = process.env.REACT_APP_BASE_URL;

export const getRecruitTeam = async post_id => {
    const reqURL = `apply/${post_id}`;

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

export const patchExtension = async (post_id, newdate) => {
    const reqURL = `apply/${post_id}/extension`;

    try {
        const response = await axiosInstance.patch(reqURL, {
            endDate: newdate,
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const patchFinish = async post_id => {
    const reqURL = `apply/${post_id}/close`;

    try {
        const response = await axiosInstance.patch(reqURL);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const patchCancel = async post_id => {
    const reqURL = `apply/${post_id}/cancel`;

    try {
        const response = await axiosInstance.patch(reqURL);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getApplyList = async post_id => {
    const reqURL = `apply/${post_id}/applylist?page=0&size=11`;

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

export const getApplication = async (post_id, apply_id) => {
    const reqURL = `apply/${post_id}/${apply_id}/application`;

    try {
        const response = await axiosInstance.get(reqURL);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const patchRecruit = async apply_id => {
    const reqURL = `apply/${apply_id}/recruit`;

    try {
        const response = await axiosInstance.patch(reqURL);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const patchNotRecruit = async apply_id => {
    const reqURL = `apply/${apply_id}/not-recruit`;

    try {
        const response = await axiosInstance.patch(reqURL);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const patchOpen = async apply_id => {
    const reqURL = `apply/${apply_id}/open`;

    try {
        const response = await axiosInstance.patch(reqURL);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
