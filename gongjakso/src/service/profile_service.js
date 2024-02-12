import axiosInstance from './axiosInstance';

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
        throw new Error('팔로워를 가져올 수 없습니다.');
    }
};
