import { Component } from 'react'
import classNames from 'classnames'

import Header from '../header/header'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import MainContent from '../main-content/main-content'
import Filter from '../filter/filter'
import MyServer from '../../server'

import './app.sass'
import '../navbar/navbar.sass'
import '../header/header.sass'

class App extends Component {

    state = {
        header: {
            style: {
                display: 'block',
                marginTop: 111
            },
            title: 'Everything You Love About Coffee'
        },
        src: '',
        title: '',
        alt: '',
        ourCoffe: true,
        cards: '',
        descr: '',
        filter: '',
        term: ''
    }

    onChangeContent = (e) => {
        e.preventDefault();
        const some = e.currentTarget.getAttribute('name');
        if (some !== 'main') {
            const resource = new MyServer();
            resource.getOurCoffeHeader()
            .then(data => {
                this.setState(({
                    cards: data[some].cards.map(elem => elem),
                    src: data[some].info.map(({src})=>src),
                    alt: data[some].info.map(({alt})=>alt),
                    title: data[some].info.map(({title})=>title),
                    descr: data[some].info.map(({descr})=>descr),
                    header: {
                        style: {
                            display: 'none',
                            marginTop: 60
                        },
                        title: data[some].info.map(({title}) => title)
                    },
                    ourCoffe: false,
                    filter: some !== 'ourBest' ? false : true
                }))
            })
        } else {
            this.setState(({
                header: {
                    style: {
                        display: 'block',
                        marginTop: 111
                    },
                    title: 'Everything You Love About Coffee'
                },
                ourCoffe: true,
                filter: false
            }))
        }
    }

    dataFilter = (items, filter) => {
        switch (filter) {
            case 'Brazil':
                return items.filter(({name}) => name === filter)
            case 'Kenya':
                return items.filter(({name}) => name === filter)
            case 'Columbia':
                return items.filter(({name}) => name === filter)
            default:
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter})
    }

    onSearchCoffe = (items, term) => {
        return term.length === 0 ? items : items.filter(({name}) => name.indexOf(term) > -1) 
    }

    onChangeValue = (term) => {
        console.log(term)
        this.setState({term})
    }

    render() {
        const {cards, term, filter, ourCoffe, forPreasure, src, title, alt, header} = this.state;
        const {style} = this.state.header;
        const visible = this.dataFilter(this.onSearchCoffe(cards, term), filter)
        return (
            <div className='app'>
                <header className={classNames('header', {'header__coffee': !ourCoffe}, {'header__pleasure': forPreasure})}>
                    <Navbar 
                        src='./img/Logo.svg' 
                        color='#fff' 
                        margin 
                        onChangeContent={this.onChangeContent} />
                        <Header 
                        title={header.title} 
                        style={style}/>
                </header>
                <MainContent 
                    onSearchCoffe={this.onChangeValue} 
                    onFilterSelect={this.onFilterSelect} 
                    src={src} 
                    title={title} 
                    alt={alt} 
                    filter={filter} 
                    cards={visible} 
                    ourCoffe={this.state.ourCoffe}/>
                <footer className='footer container'>
                    <Navbar 
                        src='./img/black-logo.svg' 
                        color='#000' 
                        footerClass
                        onChangeContent={this.onChangeContent}/>
                    <Footer/>
                </footer>
            </div>
        )
    }
 
}

export default App;