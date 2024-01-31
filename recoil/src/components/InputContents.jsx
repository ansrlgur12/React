import React from 'react';
import { useRecoilValue } from 'recoil';
import { inputContents } from '../utils/Recoil';

const InputContents = () => {

    const text = useRecoilValue(inputContents);


    return (
        <div>
            {text}
        </div>
    );
};

export default InputContents;