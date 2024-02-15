import axiosInstance from './axiosInstance';

//나의 정보
export const putMyInfo = async myinfo => {
    const reqURL = `member`;

    try {
        const response = await axiosInstance.put(reqURL, {
            name: myinfo.name,
            status: myinfo.status,
            major: myinfo.major,
            job: myinfo.job,
        });
        return response.data;
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
        throw new Error('내가 모집 중인 글을 가져올 수 없습니다.');
    }
};



//팀박스->내가 지원


//팀박스->내가 참여