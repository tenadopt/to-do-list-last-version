import React, {useState} from 'react';


type EditebleSpanType = {
    value: string
    onChange: (newTitle: string) => void
}

export const EditebleSpan = (props: EditebleSpanType) => {

    const [editMode, setEditMode] = useState(false)
    const [title, setTitle] = useState(props.value)

    const activeViewMode = () => {
        setEditMode(false)
        props.onChange(title)


        const activeEditMode = () => {
            setEditMode(true)
            setTitle(props.value)
        }

        return editMode ?
            <input value={props.value} onBlur={activeViewMode} autoFocus/> :
            <span onDoubleClick={activeEditMode}>{props.value}</span>
    }};