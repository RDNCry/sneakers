import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />

      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between flex-wrap">
        <h1 className="mr-10">Усі кросівки</h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search" />
          <input placeholder="Пошук..." />
        </div> 
        </div>

        <div className="d-flex flex-wrap justify-around flex-start">

        <Card />

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
