import React, { Component } from 'react';
import './App.css';
import {
  Button,
  Col,
  Container
} from 'react-bootstrap';
import { CustomModal } from './components';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: "",
      title: "",
      buttonTitle: "",
      icon: ""
    }
  }
  openModal = (type, title, buttonTitle, icon) => {
    this.setState({
      type,
      title,
      buttonTitle,
      icon
    });

    this.modal.handleShow();
  }

  render() {
    return (
      <Container className="App">
          <Col xs={12}>
            <Button 
              variant="outline-success" 
              onClick={()=>this.openModal('success', 'SUCCESS', 'NEXT STEP', <i class="far fa-check-circle"></i>)}
            >Success</Button>&nbsp;
            <Button 
              variant="outline-danger" 
              onClick={()=>this.openModal('danger', 'ERROR', 'TRY AGAIN', <i class="far fa-times-circle"></i>)}
            >Danger</Button>
          </Col>
          <CustomModal 
            ref={c=>this.modal=c}
            type={this.state.type}
            title={this.state.title}
            buttonTitle={this.state.buttonTitle}
            icon={this.state.icon}
          />
      </Container> 
    );
  }
}

export default App;