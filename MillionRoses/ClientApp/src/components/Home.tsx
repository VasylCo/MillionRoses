import { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import Fade from 'react-reveal/Fade';
import CountUp from 'react-countup';
import { history } from '../index';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { ukrainianLang } from '../shared/ukrainianLang';

interface HomeState {
  roses: number;
}

export const Home = () => {
  const { t } = useTranslation();
  const [roses, setRoses] = useState(0);
  useEffect(() => {
    try {
      fetch('/numbers.json', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
        .then((response) => {
          return response.json() as Promise<HomeState>;
        })
        .then((result) => setRoses(result.roses));
    } catch (ex) {
      console.log(ex);
    }
  }, []);

  const facebook = () => {
    const url = window.location.href;
    const img = `${window.location.href}Instruction.png`;
    var totalurl = url + '?img=' + img;
    window.open(
      'http://www.facebook.com/sharer.php?u=' + totalurl,
      '',
      'width=500, height=500, scrollbars=yes, resizable=no'
    );
  };

  const viber = () => {
    document.getElementById('download-link')?.click();
  };

  const pay = (url: string, toGofund: boolean = false) => {
    if (toGofund) {
      window.open('https://gofund.me/be58ad6d');
    } else {
      window.open(url, '_blank');
      history.push('/share');
    }
  };

  return (
    <>
      <div className='common-container introduce-container'>
        <div className='main-text'>
          <p>{t('main.name')}</p>
          <p>{t('main.diagnosis')}</p>
        </div>
        <img className='main-img' src='Victoria_main.png' alt='' />
      </div>
      <div className='common-container about-container'>
        <Container>
          <img
            className='first-float-img'
            src='/2_1.png'
            alt='background-form'
          />
          <img
            className='second-float-img'
            src='/3_1.png'
            alt='background-form'
          />
          <div
            className='about-first-block'
            dangerouslySetInnerHTML={{
              __html: t('about.firstBlock'),
            }}></div>
          <div
            className='about-second-block'
            dangerouslySetInnerHTML={{
              __html: t('about.secondBlock'),
            }}></div>
        </Container>
      </div>
      <Fade>
        <div className='bouquete-container'>
          <Container>
            <div className='bouquete-wrapper'>
              <div>
                <h5
                  dangerouslySetInnerHTML={{
                    __html: t('buy.priceText'),
                  }}></h5>
                <p
                  dangerouslySetInnerHTML={{
                    __html: t('buy.introduce'),
                  }}></p>
                <p
                  dangerouslySetInnerHTML={{
                    __html: t('buy.promote'),
                  }}></p>
                <a className='chose-bouquet-btn-main' href='#chose'>
                  {t('button.chooseBouquet')}
                </a>
              </div>
              <div></div>
            </div>
          </Container>
          <img
            className='bouquete-wrapper-img'
            src='roses_boquet.png'
            alt='roses-bouquet'
          />
          <img
            className='third-float-img'
            src='/4_1.png'
            alt='background-form'
          />
        </div>
      </Fade>
      <Fade>
        <div className='stat-container'>
          <Container>
            <div className='stat-wrapper'>
              <div className='stat-from'>
                <p>{t('roses.collected')}</p>
                <div className='stat-circle'>
                  <CountUp start={0} end={roses} duration={4} separator=' ' />
                </div>
              </div>
              <div className='stat-to'>
                <p>{t('roses.need')}</p>
                <div className='stat-circle'>
                  <CountUp
                    start={1000000}
                    end={1000000 - roses}
                    duration={4}
                    separator=' '
                  />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </Fade>
      <Fade>
        <div
          className='common-container text-center '
          style={{ marginTop: 50 }}
          id='chose'>
          <h4
            style={{ marginBottom: 50 }}
            dangerouslySetInnerHTML={{
              __html: t('roses.doIt'),
            }}></h4>
        </div>
        <div className='common-container chose-btns'>
          {ukrainianLang.includes(i18next.language) ? (
            <Container>
              <img
                src='/roses-3.png'
                alt='3-roses-bouquet'
                onClick={() =>
                  pay('https://send.monobank.ua/AAuSTTVW8b?amount=195')
                }
              />
              <img
                src='/roses-5.png'
                alt='5-roses-bouquet'
                onClick={() =>
                  pay('https://send.monobank.ua/AAuSTTVW8b?amount=325')
                }
              />
              <img
                src='/own-bouquet.png'
                alt='custom-bouquet'
                onClick={() => pay('https://send.monobank.ua/AAuSTTVW8b')}
              />
            </Container>
          ) : (
            <Container className='justify-content-center'>
              <img
                src='/own_boquet_en.png'
                alt='own-roses-bouquet'
                onClick={() => pay('', true)}
              />
            </Container>
          )}
        </div>
      </Fade>
      <Fade>
        <div className='lets-do-container'>
          <Container>
            <a
              id='download-link'
              href='/Download-viber.png'
              download
              style={{ display: 'none' }}></a>
            <div className='lets-do-block'>
              <div
                dangerouslySetInnerHTML={{
                  __html: t('promotion.text'),
                }}></div>
              <br />
              <br />
              <div className='test'>
                <button className='share-download-btn' onClick={facebook}>
                  {t('button.share')}
                </button>
                <button className='share-download-btn' onClick={viber}>
                  {t('button.downloadForVider')}
                </button>
              </div>
            </div>
          </Container>
        </div>
      </Fade>
      <Fade>
        <div className='sma-container'>
          <img
            className='fourth-float-img'
            src='/5_1.png'
            alt='background-form'
          />
          <Container>
            <div className='sma-container-img'>
              <img src='/Victoria_picture_2_1.png' alt='' />
            </div>
            <div className='sma-container-text'>
              <h4>{t('aboutSma.title')}</h4>
              <p
                dangerouslySetInnerHTML={{
                  __html: t('aboutSma.text'),
                }}></p>
              <a className='chose-bouquet-btn-main' href='#chose'>
                {t('buy.choseBouquete')}
              </a>
            </div>
          </Container>
        </div>
      </Fade>
    </>
  );
};
