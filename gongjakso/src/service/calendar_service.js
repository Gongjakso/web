import axiosInstance from './axiosInstance';
import axios from 'axios';
const BaseUrl = process.env.REACT_APP_BASE_URL;

export const getCalendar = async (selectYear, selectMonth) => {
    const reqURL = `calendar?year=${selectYear}&month=${selectMonth}`;

    try {
        const response = await axiosInstance.get(reqURL);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
