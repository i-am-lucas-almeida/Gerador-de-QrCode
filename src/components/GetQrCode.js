import { QRCodeCanvas } from 'qrcode.react';
import './sass/QrCode.scss';

const GetQrCode = (props) => {

    return (

        <div className='qrCode__container' ref={props.qrRef}>

            <QRCodeCanvas
                value={props.text}
                bgColor={props.bgColor}
                fgColor={props.fgColor}
                size={250}
                level='H'
                includeMargin
                className='qrCode'
            />

        </div>

    );

}

export default GetQrCode;