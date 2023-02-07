import React from 'react';

type FourthDopSuperButtonType = {
    callback: () => void
    color: string
    children?: React.ReactNode
    size?: number
}
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

