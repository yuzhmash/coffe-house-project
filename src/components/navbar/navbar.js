import classNames from 'classnames';

import './navbar.sass'


const Navbar = ({src, color, footerClass, margin, onChangeContent}) => {

    // const btnsData = [
    //     {name: 'main', label: <img src={src} alt="logo"/>},
    //     {name: 'ourBest', label: 'Our coffee'},
    //     {name: 'forPleasure', label: 'For your pleasure'}
    // ]

    // const btns = btnsData.map(({name, label}) => {
    //     return (
    //         <button 
    //             className='assortment__btn'
    //             type="button" 
    //             key={name}
    //             name={name}
    //             onClick={(e) => onChangeContent(e)}
    //             style={{color: color}}>
    //             {label}
    //         </button>
    //     )
    // })

    return (
        <nav className={classNames("header__nav", {'footer__nav': footerClass, 'margin-left': margin})}>
            <ul>
                <button onClick={(e) => onChangeContent(e)} name='main'><img src={src} alt="logo"/></button>
                <button onClick={(e) => onChangeContent(e)} name='ourBest' className='nav__btn' style={{color: color}}>Our coffee</button>
                <button onClick={(e) => onChangeContent(e)} name='forPleasure' className='nav__btn' style={{color: color}}>For your pleasure</button>
            </ul>
        </nav>
    )
}

export default Navbar;