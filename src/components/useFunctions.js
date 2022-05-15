import { useState } from 'react';

const useFunctions = () => {

    const [text, setText] = useState('');
    const [backgColor, setBackgColor] = useState('#1f3251');
    const [qrColor, setQrColor] = useState('#FFFFFF');

    const handleTextChange = (e) => {

        setText(e.target.value);

    }

    const handleBackgChange = (e) => {

        setBackgColor(e.target.value);

    }

    const handleQrChange = (e) => {

        setQrColor(e.target.value);

    }

    const resetAll = () => {

        setBackgColor('#1f3251');
        setQrColor('#FFFFFF');
        setText('');

    }

    return { text, setText, backgColor, setBackgColor, qrColor, setQrColor, handleTextChange, handleBackgChange, handleQrChange, resetAll };

}

export default useFunctions;