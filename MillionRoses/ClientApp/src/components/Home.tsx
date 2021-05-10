import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Fade from 'react-reveal/Fade';
import CountUp from 'react-countup';
import { history } from '../index';

interface HomeState {
  roses: number;
}

export class Home extends Component<{}, HomeState> {
  constructor(props) {
    super(props);
    this.state = {
      roses: 0,
    };
  }

  static displayName = Home.name;

  componentDidMount() {
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
        .then((result) => this.setState({ roses: result.roses }));
    } catch (ex) {
      console.log(ex);
    }
  }

  facebook = () => {
    const url = window.location.href;
    const img = `${window.location.href}Instruction.png`;
    var totalurl = url + '?img=' + img;
    window.open(
      'http://www.facebook.com/sharer.php?u=' + totalurl,
      '',
      'width=500, height=500, scrollbars=yes, resizable=no'
    );
  };

  viber = () => {
    document.getElementById('download-link')?.click();
  };

  pay = (url: string) => {
    window.open(url, '_blank');
    history.push('/share');
  };

  render() {
    return (
      <>
        <div className='common-container introduce-container'>
          <div className='main-text'>
            <p>Вікторія Полюга</p>
            <p>Діагноз – СМА 1-2 типу</p>
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
            <div className='about-first-block'>
              <strong>Це Вікторія, їй 1 рік. </strong> У дівчинки — рідкісне
              генетичне захворювання <strong>СМА </strong> (спінальна м'язова
              атрофія). Це означає, що її м'язи з кожним днем{' '}
              <strong>слабнуть</strong>, а з часом вона повністю втратить
              здатність самостійно дихати. <strong>Ліки від хвороби є</strong> —
              достатньо 1 уколу препарату <strong>Zolgensma (Золгенсма)</strong>{' '}
              фармацевтичної компанії Novartis.
            </div>
            <div className='about-second-block'>
              Найдорожча у світі ін'єкція, що лікує генетичний дефект, коштує{' '}
              <strong>2.3 млн доларів (65 млн грн)</strong>. Проте{' '}
              <strong>часу на збір обмаль</strong> – щодня хвороба прогресує і
              Вікторія втрачає свої моторні навички. Ліки треба ввести до
              досягнення дівчинкою <strong>2 років</strong>.
            </div>
          </Container>
        </div>
        <Fade>
          <div className='bouquete-container'>
            <Container>
              <div className='bouquete-wrapper'>
                <div>
                  <h5>
                    65 гривень – ціна однієї <strong>розкішної троянди!</strong>
                  </h5>
                  <p>
                    І батьки Вікторії, і волонтери шукають
                    <strong>
                      {' '}
                      мільйон охочих переказати на лікування маленької бодай 65
                      грн.{' '}
                    </strong>
                    Разом ми зберемо для дівчинки{' '}
                    <strong>букет з мільйона символічних троянд</strong>.
                    <br />
                    <br />
                    <span style={{ marginTop: 10 }}>
                      <strong>Здійсніть пожертву</strong> на нашій платформі,{' '}
                      <strong>подаруйте Вікторії букет</strong> від себе та
                      допоможіть дівчинці отримати омріяний{' '}
                      <strong>укол життя. </strong>
                    </span>
                  </p>
                  <a className='chose-bouquet-btn-main' href='#chose'>
                    ОБРАТИ БУКЕТ
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
                  <p>Всього подаровано троянд</p>
                  <div className='stat-circle'>
                    <CountUp
                      start={0}
                      end={this.state.roses}
                      duration={4}
                      separator=' '
                    />
                  </div>
                </div>
                <div className='stat-to'>
                  <p>Залишилось зібрати троянд</p>
                  <div className='stat-circle'>
                    <CountUp
                      start={1000000}
                      end={1000000 - this.state.roses}
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
            <h4 style={{ marginBottom: 50 }}>
              <strong>Подаруй Вікторії троянди!</strong>
            </h4>
          </div>
          <div className='common-container chose-btns'>
            <Container>
              <img
                src='/roses-3.png'
                alt='3-roses-bouquet'
                onClick={() =>
                  this.pay('https://send.monobank.ua/AAuSTTVW8b?amount=195')
                }
              />
              <img
                src='/roses-5.png'
                alt='5-roses-bouquet'
                onClick={() =>
                  this.pay('https://send.monobank.ua/AAuSTTVW8b?amount=325')
                }
              />
              <img
                src='/own-bouquet.png'
                alt='custom-bouquet'
                onClick={() => this.pay('https://send.monobank.ua/AAuSTTVW8b')}
              />
            </Container>
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
                <div>
                  Якщо у тебе <strong>День народження чи іменини</strong>, або
                  ти просто хочеш розповісти друзям про ініціативу і заохотити
                  подарувати Вікторії троянди – <strong>розмісти допис</strong>{' '}
                  в себе на сторінці, <strong>запиши відеозвернення</strong> в
                  Stories, <strong>надішли запрошення</strong> через Viber.
                  <br />
                  <br />
                  <div className='test'>
                    <button
                      className='share-download-btn'
                      onClick={this.facebook}>
                      ПОШИРИТИ ДОПИС
                    </button>
                    <button className='share-download-btn' onClick={this.viber}>
                      ЗАВАНТАЖИТИ ДЛЯ VIBER
                    </button>
                  </div>
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
                <h4>Що таке СМА</h4>
                <p>
                  Це <strong>смертельне генетичне захворювання</strong>, що
                  порушує функції{' '}
                  <strong>нервових клітин спинного мозку </strong>
                  та призводить до <strong>м’язової атрофії</strong>. Першими
                  слабнуть м’язи діафрагми, і дитина{' '}
                  <strong>перестає вільно дихати.</strong> З часом відмовляють і
                  інші м’язи, що врешті призводить до{' '}
                  <strong>зупинки серця.</strong> Без належного лікування дитина
                  може не дожити до <strong>двох років.</strong> Це захворювання
                  зустрічається в{' '}
                  <strong>однієї дитини на 6-10 тис. людей.</strong>
                </p>
                <a className='chose-bouquet-btn-main' href='#chose'>
                  ОБРАТИ БУКЕТ
                </a>
              </div>
            </Container>
          </div>
        </Fade>
      </>
    );
  }
}
