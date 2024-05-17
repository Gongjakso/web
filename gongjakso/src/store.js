import { configureStore } from '@reduxjs/toolkit';
import confirmModalReducer from './features/modal/modalSlice/confirmModalSlice';
import alertModalReducer from './features/modal/modalSlice/alertModalSlice';

export default configureStore({
    reducer: {
        confirmModal: confirmModalReducer,
        alertModal: alertModalReducer,
    },
});
