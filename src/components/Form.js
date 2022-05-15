import './sass/Form.scss';
import Input from './Input';
import { FaQrcode } from 'react-icons/fa';

const Form = (props) => {

    const downloadQrCode = (e) => {

        e.preventDefault();

        const qrCanvas = props.qrRef.current.querySelector('canvas'),
            qrImage = qrCanvas.toDataURL("image/png"),
            qrAnchor = document.createElement('a'),
            fileName = props.text;
        qrAnchor.href = qrImage;
        qrAnchor.download = fileName + '-QRCode.png';
        document.body.appendChild(qrAnchor);
        qrAnchor.click();
        document.body.removeChild(qrAnchor);

        props.resetAll();

    }

    return (

        <form className='form__container' onSubmit={downloadQrCode}>

            <input type="search" value={props.text} placeholder='Digite uma URL para gerar o Qr Code' onChange={props.textEvent} className='input-text' required />

            <Input value={props.qrColor} event={props.qrEvent} title='Customize a cor do Qr Code' />

            <Input value={props.backgColor} event={props.backgEvent} title='Customize a cor de fundo' />

            <button type='submit' className='button-download'>

                <span>Download</span>
                <FaQrcode />

            </button>

        </form>

    );

}

export default Form;