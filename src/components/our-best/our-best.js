import './our-best.sass'


const OurBest = () =>  {
    return (
        <section className="best-assortment">
            <div className="title title_best-assortment">Our best</div>
            <div className="best-assortment__items container">
                <div className="best-assortment__item">
                    <div className="best-assortment__item_img"><img src="img/solimo-coffe.png" alt="Solimo Coffee Beans 2 kg img"/></div>
                    <div className="best-assortment__item_title">Solimo Coffee Beans 2 kg</div>
                    <div className="best-assortment__item_price">10.73$</div>
                </div>
                <div className="best-assortment__item">
                    <div className="best-assortment__item_img"><img src="img/presto-coffe.png" alt="Presto Coffee Beans 1 kg"/></div>
                    <div className="best-assortment__item_title">Presto Coffee Beans 1 kg</div>
                    <div className="best-assortment__item_price">15.99$</div>
                </div>
                <div className="best-assortment__item">
                    <div className="best-assortment__item_img"><img src="img/aromistico-coffe.png" alt="AROMISTICO Coffee 1 kg"/></div>
                    <div className="best-assortment__item_title">AROMISTICO Coffee 1 kg</div>
                    <div className="best-assortment__item_price">6.99$</div>
                </div>
            </div>
        </section>
    )
}

export default OurBest;