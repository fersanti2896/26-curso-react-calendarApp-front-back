import { useDispatch, useSelector } from 'react-redux';
import { calendarApi } from '../api';

export const useAuthStore = () => {
    const { state, user, errorMessage } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    /* Proceso de login */
    const startLogin = async({ email, password }) => {
        console.log({ email, password });

        /* Proceso al backend */
        try {
            const resp = await calendarApi.post('/auth', { email, password });
            console.log({ resp });
        } catch (error) {
            console.log(error);
        }
    }

    return {
        //* Propiedades
        errorMessage,
        state, 
        user, 
        //* Métodos
        startLogin
    }
}
