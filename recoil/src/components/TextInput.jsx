import React from 'react';
import { useRecoilState } from 'recoil';
import { textState } from '../utils/Recoil';

const TextInput = () => {

    const [text, setText] = useRecoilState(textState);

    const onChange = (e) => {
        setText(e.target.value);
    }

    return (
        <div>
            <input type="text" value={text} onChange={onChange}/>
        </div>
    );
};

export default TextInput;