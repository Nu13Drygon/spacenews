import { Component, Fragment } from 'react';
// Components
import Homepage from './Homepage';
import Main from './Main';
// Styling
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';


class App extends Component {

  constructor() {
    super()
    this.state = {
      homepage: false,
      newsData: []
    }
  }

  // Hooks
  componentDidMount() {
    fetch('https://api.spaceflightnewsapi.net/v3/articles')
      .then(response => response.json())
      .then(data => this.setState({newsData: data}))
  }

  // Events
  onClickHomepage = () => {
    this.setState({homepage: !this.state.homepage})
  }


  render() {
    const {homepage, newsData} = this.state

    return (
      <Fragment>
        {
        homepage ? 
          <Homepage onClickHomepage={this.onClickHomepage} /> :
          <div className='d-flex flex-column align-items-center'>
            <Main newsData={newsData} />
          </div> 
        }
      </Fragment>
    )
  }
}

export default App;
