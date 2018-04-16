import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import { ListGroup, ListGroupItem} from "react-bootstrap";

 class App extends React.Component {
  constructor(props) {
  super(props);

  this.state = {
    title: "",
    text: ""
  };
this.upperCase=this.upperCase.bind(this);
};


upperCase(){
  $.ajax({
   url: 'http://174.138.36.217/texts/',
   method: 'GET',
   success: (data) => {
     this.setState({title: data[0].title, text: data[0].text});
   },
   error: ( xhr, err ) => {
     console.log('err', err);
    }
  })
};

textWords(str) {
  var splitLetters = str.toLowerCase().split('. ');
  for (var i = 0; i < splitLetters.length; i++) {
    splitLetters[i] = splitLetters[i].charAt(0).toUpperCase() + splitLetters[i].substring(1);
  }
  return splitLetters.join('. ');
};

titleWords(str) {
  var splitLetters = str.toLowerCase().split(' ');
  for (var i = 0; i < splitLetters.length; i++) {
    splitLetters[i] = splitLetters[i].charAt(0).toUpperCase() + splitLetters[i].substring(1);
  }
  return splitLetters.join(' ');
};

  componentDidMount() {
    this.upperCase();
  };

  render() {
    return (
      <ListGroup>
     <h1>Make UpperCase</h1>
    <ListGroupItem  >
    { this.titleWords(this.state.title) }
    </ListGroupItem>
    <ListGroupItem >
    { this.textWords(this.state.text)  }
    </ListGroupItem>
  </ListGroup>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
