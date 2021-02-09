import React, { Component } from 'react'
import imagesApi from '../api/imagesApi'
import Searchbar from './Searchbar'
import ImageGallery from './ImageGallery'
import Layout from './Layout'


class App extends Component {
    state = {
        articles: [],
        loading: false,
        searchQuery: '',
        page: 1,
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchQuery !== this.state.searchQuery) {
            this.fetchImages();
        }
    }
    
    fetchImages = () => {
        const { searchQuery, page } = this.state;

        this.setState({ loading: true });

        imagesApi.fetchImages(searchQuery, page)
            .then(articles => this.setState(prevState => ({
                articles: [...prevState.articles, ...articles],
                page: prevState.page + 1,
            })))
            .catch(error => this.setState({ error }))
            .finally(() => this.setState({ loading: false }));
    }

    handleSearchFormSubmit = query => {
        this.setState({
            searchQuery: query,
            page: 1,
            articles: [],
        })
    }
    render() {
        const { articles } = this.state;
        return (
            <Layout>
                <Searchbar onSubmit={this.handleSearchFormSubmit} />
                {articles.length > 0 && <ImageGallery images={articles}/>}
            </Layout>
        )
    }
}

export default App;