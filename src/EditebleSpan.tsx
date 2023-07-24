import React from 'react';
import {Simulate} from "react-dom/test-utils";

type EditebleSpanType = {
    value: string
}

export const EditebleSpan = (props: EditebleSpanType) => {
    return <span>{props.value}</span>
};