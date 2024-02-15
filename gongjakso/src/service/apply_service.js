import axiosInstance from './axiosInstance';

export const getRecruitTeam = async post_id => {
    const reqURL = `apply/${post_id}`;

    try {
        const response = await axiosInstance.get(reqURL);
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
    const reqURL = `apply/${post_id}/applyList`;

    try {
        const response = await axiosInstance.get(reqURL);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
