import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
export default function Bidding() {
const { _id } = useParams();
  const navigate = useNavigate();
  const [productToShow, setProductToShow] = useState(null);

  useEffect(() => {
    async function fetchGroceryItem() {
      try {
        const response = await fetch(`http://localhost:5000/api/GroceryData?_id=${_id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ _id }), // Replace with the data you want to send in the request body
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        const data = await response.json();
        const product = data.grocery_items.find(item => item.name === _id);

        if (product) {
          setProductToShow(product);
        } else {
          console.error('Product not found:', _id);
          // Handle the case where the specified product is not found
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchGroceryItem();
  }, [_id]);

  if (!productToShow) {
    return <div>Loading...</div>;
  }

  /*  const handleParticipateClick = () => {
        navigate(`/Biddingpopup/${name}`);
    };*/

    const handleParticipateClick1 = () => {
        navigate('/Home');
    };

  const isMobile = window.innerWidth <= 480;
  const buttonStyle = {
    width: isMobile ? '100%' : '673px', // Adjusted width
    height: '54px',
    flexShrink: 0,
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: isMobile ? '18px' : '16px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '18px', // Updated font size to 16px
    letterSpacing: '-0.145px',
    borderRadius: '6px',
    background: 'linear-gradient(247deg, #905CC6 0%, #C47ECC 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '16px',
    marginLeft:isMobile ? '10px' : '-10px',
  };

  const pathImageStyle = {
    width: '104px',
    height: '4px',
    flexShrink: 0,
    fill: '#D8D8D8',
    marginTop: '11.65px',
    marginBottom: '25.35px',
    marginLeft: '136.09px',
    marginRight: '134.91px'
  };

  const formContainerStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute'
  };

  const rectangleStyle = {
    width: '100%', // Adjusted for full width
    height: '150px', // Updated height to match the specified layout
    background: '#F0F0F0',
    position: 'relative',
    marginBottom: '120px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const titleContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginTop: '41.13px',
    marginBottom: '30px',
    marginLeft: '16px',
    marginRight: '76.68px'
  };

  const arrowImageStyle = {
    width: '24px',
    height: '24px',
    flexShrink: 0,
    marginTop: '41.13px',
    marginBottom: '-10px',
    marginLeft: '-90px',
    marginRight: '150.68px'
  };

  const titleStyle = {
    color: '#1D1D1D',
    fontFamily: 'Inter',
    fontSize: '28px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: 'normal',
    textAlign: 'center',
    marginTop: '111.13px',
    marginBottom: '80px',
 
  };

  const descriptionStyle = {
    color: '#3E3E3E',
    fontFamily: 'Inter',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '25px',
    textAlign: 'center',
    marginTop: '10px',
    marginBottom: '5px',
    marginLeft: '-15px',
    background: 'linear-gradient(247deg, #905CC6 0%, #C47ECC 100%)', // Replace with your desired rgba color value
    borderRadius: '6px',
    width: '661px', 
    height: '31px', 
    flexShrink: 0
  };

  const descriptionStyle1 = {
    color: '#000',
    fontFamily: 'Inter',
    fontSize: '10px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '14px',
    textAlign: 'left',
    marginLeft: '65px',
    marginTop: '35px',
    marginBottom: '5px',
    background: '#A5FFD4', // Replace with your desired rgba color value
    borderRadius: '6px',
    width: '112px', // Set the width
    height: '15px', // Set the height
    flexShrink: 0
  };

  const descriptionStyle5 = {
    color: '#FFF',
    fontFamily: 'Inter',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '12px',
    textAlign: 'center',
    marginLeft: '630px',
    marginRight: '10px',
    marginTop: '-175px',
    marginBottom: '25px',
    background: '#FF4A4A', // Replace with your desired rgba color value
    borderRadius: '5px',
    width: '58px', // Set the width
    height: '54px', // Set the height
    flexShrink: 0
  };
  const descriptionStyle12 = {
    color: '#FFF',
    fontFamily: 'Inter',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '18px',
    textAlign: 'center',
    marginLeft: '630px',
    marginRight: '20px',
    marginTop: '-45px',
    marginBottom: '10px',
    background: '#000', // Replace with your desired rgba color value
    borderRadius: '5px',
    width: '59px', // Set the width
    height: '23px', // Set the height
    flexShrink: 0
  };
  const descriptionStyle6 = {
    color: '#3E3E3E',
    fontFamily: 'Inter',
    fontSize: '10px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '14px',
    textAlign: 'center',
    marginLeft: '530px',
    marginRight: '80px',
    marginTop: '10px',
    marginBottom: '5px',
    background: 'rgba(196, 126, 204, 0.35)',
    borderRadius: '6px',
    width: '169px', // Set the width
    height: '17px', // Set the height
    flexShrink: 0
  };
  const descriptionStyle2 = {
    color: '#3E3E3E',
    fontFamily: 'Inter',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '15px',
    textAlign: 'center',
    marginTop: '1px',
    marginBottom: '17px'
  };
  const descriptionStyle3 = {
    color: '#3E3E3E',
    fontFamily: 'Inter',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '18px',
    textAlign: 'center',
    marginTop: '9px',
    marginBottom: '18px'
  };
  const descriptionStyle10 = {
    color: '#3E3E3E',
    fontFamily: 'Inter',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '14px',
    textAlign: 'left',
    marginTop: '-17px',
    marginBottom: '-88px',
    marginLeft: '35px',
  };
  const descriptionStyle13 = {
    color: '#3E3E3E',
    fontFamily: 'Inter',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '14px',
    textAlign: 'left',
    marginTop: '-17px',
    marginBottom: '-88px',
    marginLeft: '65px',
  };
  const descriptionStyle14 = {
    color: '#3E3E3E',
    fontFamily: 'Inter',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '14px',
    textAlign: 'left',
    marginTop: '72px',
    marginBottom: '-88px',
    marginLeft: '145px',
  };
  const descriptionStyle11 = {
    color: '#6A6A6A',
    fontFamily: 'Inter',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '18px',
    textAlign: 'left',
    marginTop: '100px',
    marginBottom: '-88px',
    marginLeft: '65px',
  };

  const homeIndicatorStyle = {
    width: '134px',
    height: '5px',
    flexShrink: 0,
    marginTop: '160px',
    marginBottom: '10px',
    background: '#EDEDED',
  };
  const RectangleImageStyle = {
    width: isMobile ? '100%' : '641px', // Adjusted for mobile
    height: 'auto',
    flexShrink: 0,
    marginLeft: '18px',
    marginRight: '28px',
    
  };
  const RectangleImageStyle1 = {
    width: isMobile ? '100%' : '343px', // Adjusted for mobile
    height: 'auto',
    flexShrink: 0,
    marginLeft: '98px',
    marginRight: '58px',
    marginTop: '-420px',
    marginBottom: '90px',
    position: 'center',
    
  };
  const biddingstyle = {
    borderRadius: '6px',
    position: 'center',
    width: isMobile ? '100%' : '671px',
    height: 'auto', // Adjusted for variable height content
    marginLeft: isMobile ? '0' : '45px',
    marginRight: isMobile ? '0' : '60px',
    marginTop: isMobile ? '16px' : '80px', // Adjusted for mobile
  };

  const descriptionStyle4 = {
    color: '#3E3E3E',
    fontFamily: 'Inter',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: 'normal',
    textAlign: 'left',
    marginTop: '15px',
    marginBottom: '29px',
    marginLeft: '60px',
    marginRight: '160px',
    position: 'absolute'
  };
  const descriptionStyle15 = {
    color: '#3E3E3E',
    fontFamily: 'Inter',
    fontSize: '10px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '14px',
    textAlign: 'right',
    marginLeft: '520px',
    marginRight: '80px',
    marginTop: '10px',
    marginBottom: '5px',
    background: 'none',
    borderRadius: '6px',
    width: '169px',
    height: '17px',
    flexShrink: 0
};


    const subtitleStyle1 = {
        color: '#3E3E3E',
        textAlign: 'center',
        fontFamily: 'Inter',
        fontSize: '18px',
        letterSpacing: '0.018px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: '45px',
        marginTop: '0px',
    };

    const subtitleStyle = {
        color: '#8C5CE3',
        fontFamily: 'Inter',
        fontSize: '21px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: '45px',
        letterSpacing: '0.021px',
        marginTop: '-54px',
        marginBottom: '0px',
    };
    const shareViaWhatsApp = () => {
      const productURL = window.location.href; // Get the current page URL
      const message = `Check out this amazing product: ${productToShow.name} - ${productURL}`;
      const encodedMessage = encodeURIComponent(message);
    
      const whatsappURL = `https://api.whatsapp.com/send?text=${encodedMessage}`;
      window.open(whatsappURL, '_blank');
    };


    return (
        <div style={formContainerStyle}>
            <div style={rectangleStyle}>
                <img src="/Path 46026.png" alt="Path 46026" style={pathImageStyle} />
                <div style={titleContainerStyle}>
                    <img src="/leftarrow.png" alt="Left Arrow" style={arrowImageStyle} />
                    <div style={titleStyle}>Bidding Detail</div>
                </div>
                <div style={subtitleStyle}>Thank You</div>
                <div style={subtitleStyle1}>For Participating</div>
            </div>
            <img src= "/producdisplay.png" alt="Rectangle" style={RectangleImageStyle} />
            <img src={productToShow.img}  alt="Rectangle" style={RectangleImageStyle1} />
            <div>
          <div style={descriptionStyle1}> Ends in 10.0.0 </div>
          <div >
  <p style={descriptionStyle4}>{productToShow.name}</p>
 </div>

  <div
  style={descriptionStyle11}>MRP: 
  <div style={descriptionStyle10}>{productToShow.options[0]?.MRP}</div>
    </div> 
    <div>
      <div style={descriptionStyle11}>Best Price:
      <div style={descriptionStyle13}> {productToShow.options[2]?.Best_Price}</div>
      </div>
      <div style={descriptionStyle11}>Purchased by </div> <div style={descriptionStyle14}>{productToShow.options[6]?.Purchased_by_X_Buyers} 7 Buyers </div>
</div>


          <div style={descriptionStyle5}>
            {/* Access Current_Price from the options */}
            Current Price</div>
            <div style={descriptionStyle12}>{productToShow.options[3]?.Current_Price}
          </div>
          <div>
            <div>
          <div style={descriptionStyle15}> Purchased {productToShow.options[4]?.Purchased}</div></div>
          <div style={descriptionStyle6}> Next price drops at:{productToShow.options[5]?.Next_Price_drops_at}</div>
          </div>
                <img src="/bidding.png" alt="bidding" style={biddingstyle} />
            </div>
            <div style={descriptionStyle}>You will be charged the final price at the end of the deal</div>
            <div style={descriptionStyle3}>** You will get a notification once the pool ends</div>
            <div style={descriptionStyle2}>Invite people to get a better discount</div>
            <button  type="button"
  className="btn btn-primary"
  style={buttonStyle}
  onClick={shareViaWhatsApp}>
                <span style={{ marginRight: '5px' }}>Invite Now</span>
            </button>
            <button type="button" className="btn btn-primary" style={buttonStyle} onClick={handleParticipateClick1}>
                <span style={{ marginRight: '5px' }}>Go to Home Page</span>
            </button>
            <div style={homeIndicatorStyle}></div>
        </div>
    );
}
