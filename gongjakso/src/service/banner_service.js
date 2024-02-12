import axiosInstance from './axiosInstance';

export const getProjectBanner = async () => {
    const reqURL = `banner/project`;

    try {
        const response = await axiosInstance.get(reqURL);
        return response.data;
    } catch (error) {
        throw new Error('팔로워를 가져올 수 없습니다.');
    }
};
export const getContestBanner = async () => {
    const reqURL = `banner/content`;

    try {
        const response = await axiosInstance.get(reqURL);
        return response.data;
    } catch (error) {
        throw new Error('팔로워를 가져올 수 없습니다.');
    }
};
export const getMainBanner = async () => {
    const reqURL = `banner/main`;

    try {
        const response = await axiosInstance.get(reqURL);
        return response.data;
    } catch (error) {
        throw new Error('팔로워를 가져올 수 없습니다.');
    }
};
