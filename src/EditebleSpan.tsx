import React, {ChangeEvent, useState} from 'react';


type EditebleSpanType = {
    value: string
    callBack: (newTitle: string) => void
}

export const EditebleSpan = (props: EditebleSpanType) => {

    const [editMode, setEditMode] = useState(false)
    const [title, setTitle] = useState(props.value)

    const onchangeTitleTaskHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

        const activeEditMode = () => {
            setEditMode(true)
        }

        const onBlurHandler = () => {
            setEditMode(false)
            props.callBack(title)
        }

        return editMode ?
            <input value={title} onChange={onchangeTitleTaskHandler} onBlur={onBlurHandler} /> :
            <span onDoubleClick={activeEditMode}>{props.value}</span>
    };