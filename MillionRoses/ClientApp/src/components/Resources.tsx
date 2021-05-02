import React, { Component } from 'react';
import { Container } from 'reactstrap';

export default class Resources extends Component {
  render() {
    return (
      <Container className='resources-page'>
        <h4>РЕКВІЗИТИ ДЛЯ ДОПОМОГИ:</h4>
        <br />
        <p>🌸Приватбанк 🌸</p>
        <p>4731 2196 1475 0994 Полюга Назар(тато)</p>
        <p>5168 7427 1698 7346 Полюга Назар (тато)</p>
        <br />
        <p>🌼USD IBAN 🌼UA973052990000026201899325378</p>
        <p>SWIFT CODE/BIC: PBANUA2X</p>
        <p>POLIUHA NAZAR</p>
        <br />
        <p>🌸EUR IBAN: 🌸UA553052990000026207899325639</p>
        <p>SWIFT CODE/BIC : PBANUA2X</p>
        <p>POLIUHA NAZAR</p>
        <br />
        <p>🌼Monobank :🌼</p>
        <p>5375411404612058</p>
        <br />
        <p>🌸Приватбанк 🌸</p>
        <p>5168742710339957 Коцовська Мар'яна (мама)</p>
        <br />
        <p>🌼Ощадбанк🌼</p>
        <p>5167 8032 2632 0880 Коцовська Мар'яна (мама)</p>
        <br />
        <a href='https://www.facebook.com/groups/342935707016180/?ref=share'>
          <div className='share-block-btn'>
            <div>
              <div> Ссилка на групу у Facebook </div>
              <div>
                🌺Переходьте за посиланням, слідкуйте за новинами, діліться і
                просто підтримуйте Вікусю
              </div>
            </div>
          </div>
        </a>
        <br />
        <a href='https://invite.viber.com/?g2=AQA%2BEjgd3Lp8EU1Fw9fIqhkXLSi63Ynw8Jj3R3xkMff0CqFf0ugYUY%2Bv%2FXdoaWqb'>
          <div className='share-block-btn'>
            <div>
              <div> Чат у вайбер </div>
            </div>
          </div>
        </a>
        <br />
        <a href='https://invite.viber.com/?g2=AQA%2BEjgd3Lp8EU1Fw9fIqhkXLSi63Ynw8Jj3R3xkMff0CqFf0ugYUY%2Bv%2FXdoaWqb'>
          <div className='share-block-btn'>
            <div>
              <p> Чат у вайбер </p>
            </div>
          </div>
        </a>
        <br />
        <a href='https://instagram.com/loterei_help_viktoria?igshid=18htwebcu2n3p'>
          <div className='share-block-btn'>
            <div>
              <p> Лотереї для Вікусі </p>
            </div>
          </div>
        </a>
        <br />
        <a href='https://instagram.com/yarmarka_dlya_vicktorii?igshid=xe0hx9lld00a'>
          <div className='share-block-btn'>
            <div>
              <p> Ярмарки для Вікусі </p>
            </div>
          </div>
        </a>
        <br />
      </Container>
    );
  }
}
