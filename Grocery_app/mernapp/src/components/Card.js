import React, { useState, useEffect } from 'react';
import { useDispatchCart, useCart } from './ContextReducer';
import { useNavigate } from 'react-router-dom';

export default function Card(props) {
  const cartData = useCart();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState(Object.keys(props.options)[0]);
  const priceOptions = Object.keys(props.options);
  const groceryItem = props.item;
  const dispatch = useDispatchCart();

  const handleParticipateClick = () => {
    if (!localStorage.getItem("token")) {
      console.log("Navigating to Product Detail");
      navigate(`/Productdetail/${groceryItem.name}`);
    }
  }
  console.log("Rendered Card Component");
  const handleQty = (e) => {
    setQty(Math.max(parseInt(e.target.value) || 1, 1)); // Ensure qty is at least 1
  }

  const handleOptions = (e) => {
    setSize(e.target.value);
  }

  const handleAddToCart = async () => {
    const foodItem = cartData.find(item => item.id === groceryItem._id);
    const finalPrice = qty * parseInt(props.options[size]);

    if (foodItem) {
      if (foodItem.size === size) {
        await dispatch({ type: "UPDATE", id: groceryItem._id, price: finalPrice, qty: qty });
      } else {
        await dispatch({ type: "ADD", id: groceryItem._id, name: groceryItem.name, price: finalPrice, qty: qty, size: size, img: props.ImgSrc });
        console.log("Size is different, so simply ADD one more to the list");
      }
    } else {
      await dispatch({ type: "ADD", id: groceryItem._id, name: groceryItem.name, price: finalPrice, qty: qty, size: size, img: props.ImgSrc });
    }
  }

  useEffect(() => {
    setSize(Object.keys(props.options)[0]); // Initialize size when options change
  }, [props.options]);

  const finalPrice = qty * parseInt(props.options[size]);

  const participateButtonStyle = {
    borderRadius: '6px',
    background: '#B878CB',
    width: '128px',
    height: '31px',
    flexShrink: 0,
    color: '#FFF',
    fontSize: '14px',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '170px',
    cursor: 'pointer',
  };
  const descriptionStyle5 = {
    color: '#FFF',
    fontFamily: 'Inter',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '12px',
    textAlign: 'center',
    marginLeft: '230px',
    marginRight: '180px',
    marginTop: '-65px',
    marginBottom: '25px',
    background: '#FF4A4A', // Replace with your desired rgba color value
    borderRadius: '5px',
    width: '58px', // Set the width
    height: '40px', // Set the height
    flexShrink: 0
  };
  const descriptionStyle6 = {
    color: '#FFF',
    fontFamily: 'Inter',
    fontSize: '10px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '18px',
    textAlign: 'center',
    marginLeft: '230px',
    marginRight: '180px',
    marginTop: '-30px',
    marginBottom: '10px',
    background: '#000', // Replace with your desired rgba color value
    borderRadius: '5px',
    width: '59px', // Set the width
    height: '23px', // Set the height
    flexShrink: 0
  };
 const descriptionStyle13 = {
  background: 'rgba(196, 126, 204, 0.20)',
  marginTop: '2px'
 }
  return (
    <div className="card mt-1" style={{ width: '22rem', maxHeight: '360px' }}>
      <img src={props.item.img} className="card-img-top" alt="..." style={{ width: '60px', height: '69px',flexshrink: 0, objectFit: "fill" ,...descriptionStyle13 }}  />
      <div className="card-body">
        <h5 className="card-title" style={{ fontFamily: 'Inter',
    fontSize: '12px', marginLeft: '62px', marginTop:'-60px', marginRight: '100px'}}>{props.item.name}</h5>

        <div className="container w-100">
          <div className='card-price' style={ descriptionStyle5}>
          <div>Current price</div>
          </div>
          <div className='card-price1' style={descriptionStyle6}>
           ₹ {finalPrice}
          </div>
          <button
            style={participateButtonStyle}
            onClick={handleParticipateClick}
          >
            Participate Now
          </button>
        </div>
      </div>
    </div>
  );
}
