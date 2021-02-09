import React, {Component} from 'react'
import '../styles.css'

class LoadMoreButton extends Component{
    componentDidMount() {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
    }
    
    render() {
        return (
        <button type='button' className='Button' onClick={() => this.props.loadMore()}>
            Load more
        </button>
    )
        
    }
}

export default LoadMoreButton;

