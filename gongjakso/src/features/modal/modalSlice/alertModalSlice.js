import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpen: false,
    titleContent: '',
    modalContent: '',
    redirectUrl: '',
    modal: {
        onConfirm: null, // 콜백 함수 초기값 설정
    },
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
            state.modal.onConfirm = action.payload.onConfirm; // 콜백 함수 설정
        },
        closeAlertModal: state => {
            state.isOpen = false;
            state.titleContent = '';
            state.modalContent = '';
            state.redirectUrl = '';
            state.modal.onConfirm = null; // 콜백 함수 초기화
        },
    },
});

export const { openAlertModal, closeAlertModal } = alertModalSlice.actions;

export default alertModalSlice.reducer;
