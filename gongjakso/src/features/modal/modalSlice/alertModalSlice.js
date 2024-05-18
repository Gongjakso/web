import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpen: false,
    titleContent: '',
    modalContent: '',
    redirectUrl: '', // 주소 이동 추가된 부분
};

const alertModalSlice = createSlice({
    name: 'alertModal',
    initialState,
    reducers: {
        openAlertModal: (state, action) => {
            state.isOpen = true;
            state.titleContent = action.payload.titleContent;
            state.modalContent = action.payload.modalContent;
            state.redirectUrl = action.payload.redirectUrl;
        },
        closeAlertModal: state => {
            state.isOpen = false;
            state.titleContent = '';
            state.modalContent = '';
            state.redirectUrl = ''; // 추가된 부분
        },
    },
});

export const { openAlertModal, closeAlertModal } = alertModalSlice.actions;

export default alertModalSlice.reducer;
