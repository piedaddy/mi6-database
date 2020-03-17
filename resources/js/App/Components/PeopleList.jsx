import React from 'react';

export default class PeopleList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: null
      }
    }
  componentDidMount() {
    fetch('/api/person')
    .then(response =>response.json())
    .then(data=> {
      this.setState({
        data: data
      })
      console.log(data)

    })
  }

  render(){
    let content = (
      <div className="loading">Loading...</div>
    );
    if(this.state.data) {
      content = (
        <ul>
          {
            this.state.data.map(person => (
              <li key={person.id}>
                <div className="name">{person.name}</div>
                <div className="nationality">{person.nationality}</div>
                {/* <img className="image" src={ `/images/${person.image.path}`} />  how we did it before moving the images to the storage file and changing our CROPPA so that it could make the appropriate thumbnails and store them in the appropriate section*/}
                <img className="image" src={ person.image_url} />


              </li>
            ))
          }
        </ul>
      )
    }
    return (
      <div className="people-list">{content}</div>
    )
  }
}