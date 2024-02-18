import axiosInstance from './axiosInstance';

//나의 정보
export const putMyInfo = async (myinfo, accessToken) => {
    const reqURL = `member`;

    try {
        const response = await axiosInstance.put(
            reqURL,
            {
                name: myinfo.name,
                status: myinfo.status,
                major: myinfo.major,
                job: myinfo.job,
            },
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        throw new Error('나의 정보를 가져올 수 없습니다.');
    }
};

export const getMyInfo = async (accessToken) => {
    const reqURL = `member`;

    try {
        const response = await axiosInstance.get(
            reqURL,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );
        return response.data; // 'data' 필드를 반환
    } catch (error) {
        throw new Error('나의 정보를 가져올 수 없습니다.');
    }
};


//팀박스->내가 모집 중
export const getMyRecruiting = async () => {
    const reqURL = `post/my`;

    try {
        const response = await axiosInstance.get(reqURL);
        return response.data;
    } catch (error) {
        throw new Error('내가 모집 중인 게시글을 가져올 수 없습니다.');
    }
};

//팀박스->내가 지원
export const getMyApplied = async () => {
    const reqURL = `apply/my`;

    try {
        const response = await axiosInstance.get(reqURL);
        return response.data;
    } catch (error) {
        throw new Error('내가 지원한 게시글을 가져올 수 없습니다.');
    }
};

//팀박스->내가 참여
export const getMyParticipatedMain = async () => {
    const reqURL = `apply/my-participation-post?page=0&size=2`;

    try {
        const response = await axiosInstance.get(reqURL);
        return response.data;
    } catch (error) {
        throw new Error('내가 참여한 글을 가져올 수 없습니다.');
    }
};

//내가 참여 상세페이지
export const getMyParticipated = async () => {
    const reqURL = `apply/my-participation-post?page=0&size=`;

    try {
        const response = await axiosInstance.get(reqURL);
        return response.data;
    } catch (error) {
        throw new Error('내가 참여한 글을 가져올 수 없습니다.');
    }
};