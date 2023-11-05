import AboutUs from "../about-us/about-us";
import OurBest from "../our-best/our-best";
import Filter from "../filter/filter";

import './main-content.sass'


const MainContent = ({ourCoffe, src, title, alt, cards, onFilterSelect, onSearchCoffe}) => {

    const CreateCards = () => {
        const values = Object.values(cards);
        return values.map(elem => {
            return (
                <div key={elem.id} className="assortment__card">
                    <a href="main">
                        <div className="assortment__img"><img src={elem.src} alt={elem.alt}/></div>
                        <h2 className="assortment__card_title">{elem.title}</h2>
                        <h3 className="assortment__card_name">{elem.name}</h3>
                        <h3 className="assortment__card_price">{elem.price}</h3>
                    </a>
                </div>
            )
        })
    }

    if (ourCoffe) {
        return (
            <main>
                <AboutUs/>
                <OurBest/>
            </main>
        )
    } else {
        return (
            <main id={title}>
                <section className="container descr">
                    <div className="descr__wrapper">
                        <div className="descr__img"><img src={src} alt={alt}/></div>
                        <div className="descr__text">
                            <div className="title">{title}</div>
                            <div className="main__icon main__icon_about"><img src="img/black.coffee-beans.png" alt="icon coffee beans"/></div> 
                            <div className="about-us__descr descr__descr">
                                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                                <br/><br/>
                                Afraid at highly months do things on at. Situation <br/> recommend objection do intention <br/>
                                so questions. <br/>
                                As greatly removed calling pleased improve an. <br/> Last ask him cold feel <br/>
                                met spot shy want. <br/> Children me laughing we <br/> prospect answered followed. At it went <br/>
                                is song that held help face.
                            </div>
                        </div>
                    </div>
                </section>
                <section className="assortment container">
                    <div className="line"></div>
                    <Filter onSearchCoffe={onSearchCoffe} onFilterSelect={onFilterSelect}/>
                <div className="assortment__cards">
                    <CreateCards/>
                </div>
            </section>
        </main>
        )
    }
}

export default MainContent;