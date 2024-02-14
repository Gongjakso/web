import axiosInstance from './axiosInstance';

export const patchExtension = async (post_id, newdate) => {
    const reqURL = `apply/${post_id}/extension`;
    console.log(reqURL);

    try {
        const response = await axiosInstance.patch(reqURL, {
            endDate: newdate,
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
