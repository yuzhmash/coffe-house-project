import { Component } from 'react';

import './search-panel.sass'


class SearchPanel extends Component {

    state = {
        term: ''
    }

    onChangeValue = (e) => {
        e.preventDefault()
        const term = e.target.value
        this.setState({term})
        this.props.onSearchCoffe(this.state.term)
    }

    render() {
        const {term} = this.state
        return (
            <form>
                <label htmlFor="myInput">looking for</label>
                <input 
                    onChange={(e) => this.onChangeValue(e)}
                    value={term}
                    type="search" 
                    id="myInput" 
                    placeholder="start typing here..."/>
            </form>
        )
    }
}

export default SearchPanel;