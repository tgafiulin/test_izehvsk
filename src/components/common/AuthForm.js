import './AuthForm.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editLogin } from '../../app/loginReducer'
import { closeModal } from '../../app/modalReducer'

function AuthForm () {
    const dispatch = useDispatch();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editLogin(login))
        dispatch(closeModal())

        setLogin('')
        setPassword('')
        setRemember(false)
    }
        
    return (
        <div className="form">
            <div className="form__title">Вход</div>
            <form 
                method="GET"
                className="auth" 
                onSubmit={handleSubmit}
                >
                <input
                    name="login"
                    className="auth__input" 
                    placeholder="Логин"
                    value={login}
                    onChange={e => setLogin(e.target.value)}
                    type="text"/>
                <input
                    name="password"
                    className="auth__input" 
                    placeholder="Пароль" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="text"/>
                <label 
                    htmlFor="remember" 
                    className="auth__check">
                    <input 
                        name="remember"
                        id="remember"
                        checked={remember}
                        onChange={e => setRemember(e.target.value)}
                        type="checkbox"/>Запомнить
                </label>
                <input 
                    className="btn" 
                    type="submit" 
                    value="Войти" />
            </form>
        </div>
    );
}

export default AuthForm;