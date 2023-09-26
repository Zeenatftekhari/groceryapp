import React from 'react';
import { Link } from 'react-router-dom';

const carouselStyle = {
  width: '343px',
  height: '134px',
  marginTop: '10px',
  marginBottom: '2px',
  marginLeft: '15px',
  marginRight: '17px',
  borderRadius: '10px',
  background: '#8C5CE3',
  flexShrink: 0,
};

const titleStyle = {
  color: '#FFF',
  textAlign: 'center',
  fontFamily: 'Inter',
  fontSize: '21px',
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: '26px',
  letterSpacing: '0.021px',
  marginTop: '20px',
  marginBottom: '2px',
  marginLeft: '135px',
  marginRight: '16px',
};

const subtitleStyle = {
  color: "#FFF",
  fontFamily: 'Inter',
  fontSize: '12px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '26px',
  marginTop:'2px',
  marginBottom: '24px',
  marginLeft: '170px',
  marginRight: '44px',
};

export default function Carousel() {
  return (
    <div style={carouselStyle}>
      <div className="carousel-inner" id="carousel">
        <div className="carousel-item active">
          <div style={titleStyle}>Weekly group buy exclusive</div>
          <div style={subtitleStyle}>Shop More, Save More</div>
        </div>
      </div>
    </div>
  );
}
