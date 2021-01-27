import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { openModal } from '../../app/modalReducer'
import { editLogin } from '../../app/loginReducer'

function AuthHeader () {
    let login = useSelector(state => state.login.login)
    const [loginText, editLoginText] = useState(login)
    const dispatch = useDispatch();
    const [edit, updateEdit] = useState(false)

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(editLogin(''))
    } 

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(openModal())
    }

    const handleEditLogin = () => {
        updateEdit(true)
    }

    const handleBlur = () => {
        dispatch(editLogin(loginText))
        updateEdit(false)
    }

    let loginJsx

    if (!edit) {
        loginJsx = <div className="auth-header__login" onClick={handleEditLogin}>{login}</div>
    } else {
        loginJsx = <input value={loginText} onChange={(e) => editLoginText(e.target.value)} onBlur={handleBlur} className="input input--login" />
    }
    return (
        <div className="auth-header">
            { loginJsx }
            { login.length ?  <button className="btn btn--close" onClick={handleLogout}>Выйти</button> : <button className="btn" onClick={handleLogin}>Войти</button> }
        </div>
    )
}

export default AuthHeader;