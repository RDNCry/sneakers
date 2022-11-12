function Card() { 
  return (
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
        );
      }

export default Card;  
