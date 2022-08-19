import { useState } from 'react';
import QrCode from 'react-qr-code'
import QrCodeLink from 'qrcode'

import './App.css';

function App() {
  const [link, setlink] = useState('')
  const [qrTemp, setQrTemp] = useState('')

  function handleGenarate(link_url){
    QrCodeLink.toDataURL(link_url,{
      width: 800,
      margin: 4, 
    }, function (err, url){
      setQrTemp(url);
    })
  }

  function handleQrcode(event){
    setlink(event.target.value);
    handleGenarate(event.target.value);
  }

  return (
    <div className='container' >

      <QrCode
        value={link}
      />  

      <input
        className='input' 
        placeholder='Digitar o que deseja transformar em qrcode!' 
        value={link}
        onChange={ (event)=> handleQrcode(event)}
        /> 

      <a href={qrTemp} download={`qrcode.png`} > Download QrCode </a>

    </div>
  );
}

export default App;
