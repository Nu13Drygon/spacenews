import { Component, Fragment } from 'react';
import NewsCard from './NewsCard';

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        const {newsData} = this.props
        return (
            <Fragment>
                {newsData.map((newsItems) => {
                    return (
                        <NewsCard 
                            title={newsItems.title} 
                            image={newsItems.imageUrl} 
                            summary={newsItems.summary} 
                            source={newsItems.url}
                        />
                    )
                })}
            </Fragment>
        )
    }
}

export default Main