import React, { Component } from 'react';

export default class Share extends Component {
  componentDidMount() {
    this.share();
  }
  share() {
    const url = window.location.href;
    const img = `${window.location.href}fb_3_3.png`;
    const title = 'Врятуємо Вікторію разом!';
    const text = 'Важливий текст';
    console.log(url);
    console.log(img);
    var totalurl = url + '?img=' + img;
    /*  window.open(
                    'https://www.facebook.com/sharer.php?s=100&p[title]=%D0%A5%D0%BE%D0%B1%D0%B1%D1%96%D1%82.%20%D0%A2%D1%83%D0%B4%D0%B8%20%D1%82%D0%B0%20%D0%BD%D0%B0%D0%B7%D0%B0%D0%B4%20%7C%20%D0%92%D0%B8%D0%B4%D0%B0%D0%B2%D0%BD%D0%B8%D1%86%D1%82%D0%B2%D0%BE%20%C2%AB%D0%A7%D0%BE%D0%B2%D0%B5%D0%BD%C2%BB&p[summary]=&p[url]=https%3A%2F%2Fstaging4.choven.org%2Fproduct%2Fhobbit-tudy-ta-nazad%2F&p[images][0]=https%3A%2F%2Fstaging4.choven.org%2Fwp-content%2Fuploads%2F2019%2F08%2Fartworks-000199985890-lvz922-t500x500.jpg'
                  ); */
    /*  window.open(
                    `https://www.facebook.com/sharer.php?s=100&p[title]=${title}&p[summary]=${text}&p[url]=${url}&p[images][0]=https%3A%2F%2Fstaging4.choven.org%2Fwp-content%2Fuploads%2F2019%2F08%2Fartworks-000199985890-lvz922-t500x500.jpg`,
                    '',
                    'toolbar=0,status=0,width=626,height=436'
                  ); */
    window.open(
      'http://www.facebook.com/sharer.php?u=' + totalurl,
      '',
      'width=500, height=500, scrollbars=yes, resizable=no'
    );
  }

  render() {
    return <div></div>;
  }
}
