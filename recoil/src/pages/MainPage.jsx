import React from 'react';
import TextInput from '../components/TextInput';
import CharacterCount from '../components/CharacterCount';
import InputContents from '../components/InputContents';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button"

const MainPage = () => {

    const nav = useNavigate();
    return (
        <div>
            <TextInput />
            <CharacterCount />
            <InputContents />
            <br />
            <button onClick={()=>nav("todo")}>TodoList</button>
            <Button variant="outline">Button</Button>
        </div>
    );
};

export default MainPage;