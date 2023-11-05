import './header.sass'


const Header = ({title, style}) => {
    return (
        <div className="container">
            <h2 style={{marginTop: style.marginTop}} className="header__title">
                {title}
            </h2>
            <div style={{display: style.display}} className="main__icon">
                <img src="img/three-coffe.png" alt="icon coffee beans"/> 
            </div> 
            <h2 style={{display: style.display}} className="header__subtitle">
                We makes every day full of energy and taste 
                <br/> Want to try our beans?
            </h2>
            <button style={{display: style.display}} className="header__btn">More</button>
        </div>
    )
};

export default Header;