import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Fade from 'react-reveal/Fade';
import CountUp from 'react-countup';
import { faWindows } from '@fortawesome/free-brands-svg-icons';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <>
        <div className='introduce-container common-container' id='top'>
          <div className='img'></div>
          <div style={{ padding: 60 }}>
            <h1>Вікторія</h1>
            <p>
              Це Вікторія, їй 1 рік. У дівчинки — рідкісне генетичне
              захворювання СМА (спінальна м'язова атрофія). Це означає, що її
              м'язи з кожним днем слабнуть, а з часом вона повністю втратить
              здатність самостійно дихати. Ліки від хвороби є — достатньо 1
              уколу препарату Zolgensma (Золгенсма) фармацевтичної компанії
              Novartis. Найдорожча у світі ін'єкція, що лікує генетичний дефект,
              коштує 2.3 млн доларів (65 млн грн). Проте часу на збір обмаль –
              щодня хвороба прогресує і Вікторія втрачає свої моторні навички.
              Ліки треба ввести до досягнення дівчинкою 2 років. І батьки
              Вікторії, і волонтери шукають мільйон охочих переказати на
              лікування маленької бодай по 65 грн. 65 грн — ціна однієї
              розкішної троянди. Ми хочемо зібрати для Вікторії букет з мільйона
              символічних троянд. Здійсніть пожертву на нашій платформі,
              подаруйте Вікторії букет від себе та допоможіть дівчинці отримати
              омріяний укол життя. <br />
              <br />
              #ВрятуємоВікторіюРазом
            </p>
          </div>
        </div>
        <Fade>
          <div className='counter-container common-container'>
            <div>
              <p>Всього подаровано троянд</p>
              <div className='main-button'>
                <CountUp start={0} end={27917} duration={5} separator=' ' />
              </div>
            </div>
            <div>
              <p>Залишилось зібрати троянд</p>
              <div className='main-button'>
                <CountUp
                  start={1000000}
                  end={972083}
                  duration={5}
                  separator=' '
                />
              </div>
            </div>
          </div>
        </Fade>
        <Fade>
          <div
            className='common-container text-center'
            style={{ marginTop: 50 }}
            id='test'>
            <h4>
              <strong>Подаруй троянди Вікторії</strong>
            </h4>
          </div>
          <div className='common-container'>
            <Container>
              <div className='bouquet-btn'>
                <img
                  src={'/roses_3.png'}
                  className='buy-rouse-img'
                  alt='rose'></img>
                <h5>3 троянди</h5>
                <p>195 грн</p>
                <a
                  className='buy-btn'
                  href='https://send.monobank.ua/AAuSTTVW8b?amount=195'
                  target='_blank'>
                  ПОДАРУВАТИ
                </a>
              </div>
              <div className='bouquet-btn'>
                <img
                  src={'/roses_5.png'}
                  className='buy-rouse-img'
                  alt='rose'></img>
                <h5>5 троянд</h5>
                <p>325 грн</p>
                <a
                  className='buy-btn'
                  href='https://send.monobank.ua/AAuSTTVW8b?amount=325'
                  target='_blank'>
                  ПОДАРУВАТИ
                </a>
              </div>
              <div className='bouquet-btn'>
                <img
                  src={'/roses_boquet.png'}
                  className='buy-rouse-img'
                  alt='rose'></img>
                <h5>Власний букет</h5>
                <p>Створити власний букет на довільну суму від 100 грн</p>
                <a
                  className='buy-btn'
                  href='https://send.monobank.ua/AAuSTTVW8b'
                  target='_blank'>
                  ПОДАРУВАТИ
                </a>
              </div>
            </Container>
          </div>
        </Fade>
        <Fade>
          <div className='birthday-section'>
            <div>
              Якщо у тебе день народження чи іменини, або ти просто хочеш
              розповісти друзям про ініціативу і запросити подарувати Вікторії
              троянди - розмісти інструкцію в себе на сторінці, запиши
              відеозвернення в сторіз, почепи рамку на своє фото, надішли їм
              запрошення через вайбер.
            </div>
          </div>
        </Fade>
        <Fade>
          <div className='about-cma-section'>
            <div>
              <h3>Що таке СМА</h3>
              <p>
                Це смертельне генетичне захворювання, що порушує функції
                нервових клітин спинного мозку та призводить до м’язової
                атрофії. Першими слабнуть м’язи діафрагми, і дитина перестає
                вільно дихати. З часом відмовляють і інші м’язи, що врешті
                призводить до зупинки серця. Без належного лікування дитина може
                не дожити до двох років. Це захворювання зустрічається в однієї
                дитини на 6-10 тис. людей.
              </p>
            </div>
          </div>
        </Fade>
      </>
    );
  }
}
