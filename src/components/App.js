import React, { Component } from 'react'
import imagesApi from '../api/imagesApi'
import Searchbar from './Searchbar'


class App extends Component {
    state = {
        articles: [],
        loading: false,
        searchQuery: '1',
        page: 1,
    }
    fetchImages = () => {
        const { searchQuery, page } = this.state
        
        this.setState({loading:true})
        
        imagesApi.fetchImages(searchQuery, page)
            .then(articles => this.setState(prevState => ({
                articles: [...prevState.articles, ...articles],
                page: prevState.page + 1,
            })))
            .catch(error => this.setState({ error }))
            .finally(() => this.setState({loading: false}))
    }

    handleSearchFormSubmit = query => {
        this.setState({
            searchQuery: query,
            page: 1,
            articles: [],
        })
    }
    render() {
        
        return <Searchbar onSubmit={this.handleSearchFormSubmit}/>
    }
}

export default App;