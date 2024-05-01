import axiosInstance from './axiosInstance';
import axios from 'axios';
const BaseUrl = process.env.REACT_APP_BASE_URL;

//나의 정보
export const putMyInfo = async (name, major, job, status, phone) => {
    const reqURL = `member`;

    try {
        const response = await axiosInstance.put(reqURL, {
            name: name,
            phone: phone,
            status: status,
            major: major,
            job: job,
        });
        return response.data;
    } catch (error) {
        throw new Error('나의 정보를 가져올 수 없습니다.');
    }
};

export const getMyInfo = async () => {
    const reqURL = `member`;

    try {
        const response = await axiosInstance.get(reqURL);
        return response.data;
    } catch (error) {
        console.log('내가 지원한 게시글을 가져올 수 없습니다.');
    }
};

//팀박스->내가 모집 중
export const getMyRecruiting = async () => {
    const reqURL = `post/my`;

    try {
        const response = await axiosInstance.get(reqURL);
        console.log(response);
        return response.data;
    } catch (error) {
        console.log('내가 모집 중인 게시글을 가져올 수 없습니다.', error);
    }
};

//팀박스->내가 지원
export const getMyApplied = async () => {
    const reqURL = `apply/my`;

    try {
        const response = await axiosInstance.get(reqURL);
        return response.data;
    } catch (error) {
        console.log('내가 지원한 게시글을 가져올 수 없습니다.');
    }
};

//팀박스->내가 참여
export const getMyParticipatedMain = async () => {
    const reqURL = `apply/my-participation-post?page=0&size=2`;

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

//내가 참여 상세페이지
export const getMyParticipated = async () => {
    const reqURL = `apply/my-participation-post?page=0&size=6`;

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
