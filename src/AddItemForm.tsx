import React, {ChangeEvent, useState} from 'react';

type AddItemFormType = {
    addItem: (title: string)=>void
}


export const AddItemForm = (props: AddItemFormType) => {

    const [title, setTitle] = useState('')
    const [error, setError] = useState('')

    const addTaskHandler = () => {
        if (title.trim() !== '') {
            props.addItem(title.trim())
            setTitle('')
        } else setError('Title is Requied')
        setTitle('')
    }

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value);
    const onChangeEnterHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        setError('')
        if (e.key === 'Enter') {
            addTaskHandler()
            setTitle('')
        }
    };

    return (
        <div className="App">
                <input
                    className={error ? 'error' : ''}
                    value={title}
                    onChange={onChangeInputHandler}
                    onKeyDown={onChangeEnterHandler}
                />
                <button onClick={addTaskHandler}>+</button>
                {error && <div className='error-message'>{error}</div>}
        </div>
    );
};