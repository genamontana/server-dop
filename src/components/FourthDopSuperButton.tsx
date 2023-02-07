import React from 'react';
import s from './FourthDopSuperButton.module.css'

type FourthDopSuperButtonType = {
    callback: () => void
    color?: string
    disabled?: boolean
    children?: React.ReactNode
    size?: number
}
export const FourthDopSuperButton: React.FC<FourthDopSuperButtonType> = (props) => {
    const {callback, color, children, disabled, ...otherProps} = props

    //const finalClassName = `${s.button} ${s.disabled}`
    //const finalClassName = `${s.button} ${color === 'red' ? s.red : s.default}`
    const finalClassName = `${s.button} 
    ${color === 'red' ? s.red : color === 'secondary' ? s.secondary : s.default}
    ${disabled ? s.disabled : ''}`

    return (
        <button className={finalClassName}>{children}</button>
    );
};

/*
const finalClassName = s.button
    + (disabled
        ? ' ' + s.disabled
        : color === 'red'
            ? ' ' + s.red
            : color === 'secondary'
                ? ' ' + s.secondary
                : ' ' + s.default)
    + (className ? ' ' + className : '')
*/


//----------------------------------------------------------------------------------------------------------------------
/*
export const FourthDopSuperButton: React.FC<FourthDopSuperButtonType> = (
    {
        callback,
        color,
        children,
        ...otherProps
    }
) => {
    return (
        <button>{children}</button>
    );
};
*/

