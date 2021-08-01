import { useEffect } from 'react';
import { Container } from 'reactstrap';
import { history } from '../index';

export default function Share() {
  const download = () => {
    document.getElementById('download-link')?.click();
    history.push('/');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container className='share-page'>
      <a
        id='download-link'
        href='/fb_3_3.png'
        download
        style={{ display: 'none' }}></a>
      <h3>
        <strong>Дякуємо, що купили троянди для Вікторії!</strong>
      </h3>
      <p>
        Завантажте зображення, яке ви можете розмістити на Вашій сторінці у
        Facebook або на сторінці друзів, чи надіслати їм електронною поштою.
      </p>
      <img src='/fb_3_3.png' onClick={download} alt='' />
    </Container>
  );
}
