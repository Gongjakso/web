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

/*
export const getKakaoProfileImage = async accessToken => {
    try {
        const response = await axiosInstance.get('https://kapi.kakao.com/v2/user/me', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
            },
        });

        const profileImageUrl = response.data.kakao_account.profile.profile_image_url;

        return profileImageUrl;
    } catch (error) {
        throw new Error('카카오 프로필 이미지를 가져올 수 없습니다.');
    }
};
*/