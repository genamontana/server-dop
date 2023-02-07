import React from 'react';

type FourthDopSuperButtonType = {
    callback: () => void
    color: string
    children?: React.ReactNode
}
export const FourthDopSuperButton: React.FC<FourthDopSuperButtonType> = (
    {
        callback,
        color,
        children
    }
) => {


    return (
        <button>{children}</button>
    );
};
