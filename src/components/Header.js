function Header() { 
  return (
<header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
        <img width={40} height={40} src="/img/logo.png" />
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5 mr-10">Крамниця найкращих кросівок</p>
        </div>
        </div>
        <ul className="d-flex">
          <li className="mr-25">
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
      );
    }
    
    export default Header; 