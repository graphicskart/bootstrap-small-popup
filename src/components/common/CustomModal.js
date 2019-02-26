import React, { Component } from 'react';
import {
    Modal,
    Button,
    Col
} from 'react-bootstrap';

export default class CustomModal extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.state = {
        show: false,
      };
    }
  
    handleClose = () => {
      this.setState({ show: false });
    }
  
    handleShow = () => {
      this.setState({ show: true });
    }
  
    render() {
      return (
          <Modal show={this.state.show} onHide={this.handleClose} className={`${this.props.type} ${this.props.type} text-center`} size="sm">
            
            <Modal.Body>
                <Col xs={12} sm={{span:8, offset: 2}}>
                    <p className="icon">{this.props.icon}</p>
                    <p className="title">{this.props.title}</p>
                </Col>
                  <Col xs={12} className="modal-footer-area">
                    <Button variant={`outline-${this.props.type}`} onClick={this.handleClose}>
                          {this.props.buttonTitle}
                    </Button>
                  </Col>
            </Modal.Body>
            
          </Modal>
      );
    }
  }