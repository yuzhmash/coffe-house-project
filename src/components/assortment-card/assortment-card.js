

import './assortment-card.sass'

const AssortmentCard = () => {
    return (
        <main id={'main'}>
            <section class="forPadding">
                <div class="block container">
                    <div class="block__img"><img src="img/big-img.jpg" alt="img"/></div>
                    <div class="block__main">
                        <div class="block__title">About it</div>
                        <div class="main__icon"><img src="img/black.coffee-beans.png" alt="icon coffee beans"/></div>
                        <div class="block__country"><span>Country:</span> Brasil</div>
                        <br/>
                        <div class="block__descr">
                            <span>Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                        <br/>
                        <div class="block__price"><span>Price:</span>  16.99$</div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default AssortmentCard;