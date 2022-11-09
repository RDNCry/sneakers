function App() {
  return (
    <div className="wrapper clear">

      <div className="overlay">
        <div className="drawer">
          <h2>Кошик</h2>

          <div className="cartItem d-flex justify-between align-center">
            <img src="/img/sneakers/2.jpg" width={70} height={70} alt="Sneakers"/>
            <div className="d-flex flex-column">
              <p>Чоловічі Кросівки Nike Air Max 270</p>
              <b>6 999 грн.</b>
            </div>
            <button>
              <img src="/img/close.svg" alt="close" />
            </button> 
          </div>

          <div className="cartItem d-flex justify-between align-center">
            <img src="/img/sneakers/4.jpg" width={70} height={70} alt="Sneakers"/>
            <div className="d-flex flex-column">
              <p>Кросівки Puma X Aka Boku Future Rider</p>
              <b>4 999 грн.</b>
            </div>
            <button>
              <img src="/img/close.svg" alt="close" />
            </button> 
          </div>

        </div>
      </div>

      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
        <img width={40} height={40} src="/img/logo.png" />
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">Крамніця найкращих кросівок</p>
        </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
          <img width="20" height="20" src="/img/card.svg"/>
            <span>1205 грн.</span>
          </li> 
          <li>
          <img width="20" height="20" src="/img/heart.svg"/>
          </li>
          <li>
          <img width="20" height="20" src="/img/user.svg"/>
          </li>
        </ul>
      </header>

      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
        <h1>Усі кросівки</h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search" />
          <input placeholder="Пошук..." />
        </div> 
        </div>
        <div className="d-flex justify-between">

        <div className="card">
          <div className="favorite">
            <img src="/img/heart-liked.svg" alt="liked" />
          </div>
          <img width={133} height={112} src="/img/sneakers/1.jpg" alt="Sneakers" />
          <h5>Чоловічі Кросівки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Ціна:</span>
              <b>6 999 грн.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/Plus.svg" alt="Plus" />
            </button>
          </div>
        </div>

        <div className="card">
          <div className="favorite">
            <img src="/img/heart-unliked.svg" alt="unliked" />
          </div>
          <img width={133} height={112} src="/img/sneakers/2.jpg" alt="Sneakers" />
          <h5>Чоловічі Кросівки Nike Air Max 270</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Ціна:</span>
              <b>6 999 грн.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/Plus.svg" alt="Plus" />
            </button>
          </div>
        </div>
      
        <div className="card">
          <div className="favorite">
            <img src="/img/heart-unliked.svg" alt="unliked" />
          </div>
          <img width={133} height={112} src="/img/sneakers/3.jpg" alt="Sneakers" />
          <h5>Чоловічі Кросівки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Ціна:</span>
              <b>3 499 грн.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/Plus.svg" alt="Plus" />
            </button>
          </div>
        </div>
      
        <div className="card">
          <div className="favorite">
            <img src="/img/heart-unliked.svg" alt="unliked" />
          </div>
          <img width={133} height={112} src="/img/sneakers/4.jpg" alt="Sneakers" />
          <h5>Кросівки Puma X Aka Boku Future Rider</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Ціна:</span>
              <b>4 999 грн.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/Plus.svg" alt="Plus" />
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;  
