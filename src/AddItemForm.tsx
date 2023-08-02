import React, {ChangeEvent, useState} from 'react';
import {Button, IconButton, TextField} from "@mui/material";
import {AddBox} from "@mui/icons-material";

type AddItemFormType = {
    addItem: (title: string) => void
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
        <div>
            <TextField variant='outlined'
                       value={title}
                       onChange={onChangeInputHandler}
                       onKeyDown={onChangeEnterHandler}
                       error={!!error}
                       label={'Title'}
                       helperText={error}
            />
            <IconButton style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}}
                        color='primary'
                        onClick={addTaskHandler}>
                        <AddBox />
            </IconButton>
        </div>
    );
};