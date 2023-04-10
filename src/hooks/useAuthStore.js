import { useDispatch, useSelector } from 'react-redux';
import { calendarApi } from '../api';
import { clearErrorMessage, onChecking, onLogin, onLogout } from '../store';


export const useAuthStore = () => {
    const { state, user, errorMessage } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    /* Proceso de login */
    const startLogin = async({ email, password }) => {
        dispatch( onChecking() );

        /* Proceso al backend */
        try {
            const { data } = await calendarApi.post('/auth', { email, password });

            localStorage.setItem( 'token', data.token );
            localStorage.setItem( 'token-init-date', new Date().getTime() );

            dispatch( onLogin({ name: data.name, uid: data.uid }) );
        } catch (error) {
            dispatch( onLogout('Credenciales incorrectas') );
            
            setTimeout(() => {
                dispatch( clearErrorMessage() );
            }, 10);
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
