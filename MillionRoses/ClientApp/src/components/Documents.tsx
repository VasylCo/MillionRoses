import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import { Container } from 'reactstrap';

export default class Documents extends Component {
  images = [
    {
      original: '/documents/Doc_1.jpg',
      thumbnail: '/documents/thumbnails/Doc_1_tn.jpg',
    },
    {
      original: '/documents/Doc_3.jpg',
      thumbnail: '/documents/thumbnails/Doc_3_tn.jpg',
    },
    {
      original: '/documents/Doc_2.jpg',
      thumbnail: '/documents/thumbnails/Doc_2_tn.jpg',
    },
    {
      original: '/documents/Doc_4.jpg',
      thumbnail: '/documents/thumbnails/Doc_4_tn.jpg',
    },
    {
      original: '/documents/Doc_5.jpg',
      thumbnail: '/documents/thumbnails/Doc_5_tn.jpg',
    },
    {
      original: '/documents/Doc_6.jpg',
      thumbnail: '/documents/thumbnails/Doc_6_tn.jpg',
    },
    {
      original: '/documents/Doc_7.jpg',
      thumbnail: '/documents/thumbnails/Doc_7_tn.jpg',
    },
    {
      original: '/documents/Doc_8.jpg',
      thumbnail: '/documents/thumbnails/Doc_8_tn.jpg',
    },
  ];

  render() {
    return (
      <Container className='documents-page'>
        <h2>Документи</h2>
        <br></br>
        <ImageGallery items={this.images} />
      </Container>
    );
  }
}
