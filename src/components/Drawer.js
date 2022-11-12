function Drawer() { 
  return (
      <div className="overlay" style={{ display: 'none' }}>
        <div className="drawer">
          <div className="drawerTop d-flex justify-between">
          <h2 className="mb-30">Кошик</h2>
          <button className="remove">
                <img src="/img/close.svg" alt="close" />
          </button>
          </div>
        
          <div className="items">
            <div className="cartItem d-flex justify-between align-center mb-20">
              <div style={{ backgroundImage: 'url(/img/sneakers/2.jpg' }} className="cartItemImg"></div>
              <div className="flex mr-20">
                <p className="mb-5">Чоловічі Кросівки Nike Air Max 270</p>
                <b>6 999 грн.</b>
              </div>
              <button className="remove">
                <img src="/img/remove.svg" alt="remove" />
              </button> 
            </div>

            <div className="cartItem d-flex justify-between align-center mb-20">
              <div style={{ backgroundImage: 'url(/img/sneakers/4.jpg' }} className="cartItemImg"></div>  
              <div className="flex mr-20">
                <p className="mb-5">Кросівки Puma X Aka Boku Future Rider</p>
                <b>4 999 грн.</b>
              </div>
              <button className="remove">
                <img src="/img/remove.svg" alt="remove" />
              </button> 
            </div>

          </div>        

          <div className="cartTotal d-flex align-end">
            <span>Всього:</span>
            <div></div>
            <b>11 998 грн.</b>
          </div>
          
          <button className="orderBtn">Оформити замовлення <img src="/img/arrow.svg" alt="Arrow"/></button>

        </div>
      </div>
);
}

export default Drawer; 