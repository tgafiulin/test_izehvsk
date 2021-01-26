import './Modal.css';
import AuthForm from './AuthForm';
import { useSelector } from 'react-redux'

function Modal() {
    let className = 'modal-container';
    const openModal = useSelector(state => state.modal.openModal)
    if(openModal) {
        className += ' -open';
    }

    return (
        <div className={className}>
            <div className="close"></div>
            <div className="modal">
                <AuthForm />
            </div>
        </div>
    )
}

export default Modal;