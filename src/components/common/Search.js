import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateSearchValue } from '../../app/movieReducer'

function Search () {
    const [searchValue, updateValue] = useState('')
    const dispatch = useDispatch()

    const onKeyPressHandler = (e) => {
        if (e.key === 'Enter') {
            handleCLick()
        }
    }

    const handleCLick = () => {
        dispatch(updateSearchValue(searchValue))
        updateValue('')
    }

    return (
        <div className="search">
            <input 
                className="input" 
                onChange={(e) => updateValue(e.target.value)}
                onKeyPress={onKeyPressHandler}
                value={searchValue}
                type="text" 
                placeholder="Поиск..." />
            <button className="search__btn" onClick={handleCLick}>Найти</button>
        </div>
    )
}

export default Search;