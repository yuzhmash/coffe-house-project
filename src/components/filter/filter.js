import SearchPanel from '../search-panel/search-panel'

import './filter.sass'

const Filter = ({onSearchCoffe, onFilterSelect}) => {

    const btnsData = [
        {name: 'Brazil', label: 'Brazil'},
        {name: 'Kenya', label: 'Kenya'},
        {name: 'Columbia', label: 'Columbia'}
    ]

    const btns = btnsData.map(({name, label}) => {
        return (
            <button 
                className='assortment__btn'
                type="button" 
                key={name}
                onClick={() => onFilterSelect(name)}>
                {label}
            </button>
        )
    })

    return (
        <div className='assortment__wrapper'>
            <SearchPanel onSearchCoffe={onSearchCoffe}/>
            <div className="assortment__filters">
                <div className="assortment__title">Or filter</div>
                <div className="all_btn">
                    {btns}
                </div>
            </div>
        </div>
    )
}

export default Filter;