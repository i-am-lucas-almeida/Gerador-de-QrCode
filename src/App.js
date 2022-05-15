import useFunctions from './components/useFunctions';
import GetQrCode from './components/GetQrCode';
import Form from './components/Form';
import React, { useRef } from 'react';

const App = () => {

  const qrRef = useRef();

  const { text, backgColor, qrColor, handleTextChange, handleBackgChange, handleQrChange, resetAll } = useFunctions();

  return (

    <div className='container'>

      <GetQrCode
        qrRef={qrRef}
        text={text}
        bgColor={backgColor}
        fgColor={qrColor}
      />

      <Form
        qrRef={qrRef}
        text={text}
        textEvent={handleTextChange}
        backgEvent={handleBackgChange}
        qrEvent={handleQrChange}
        backgColor={backgColor}
        qrColor={qrColor}
        resetAll={resetAll}
      />

    </div>

  );

}

export default App;
