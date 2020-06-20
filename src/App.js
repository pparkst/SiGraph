import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, FormText, Form } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { thisTypeAnnotation } from '@babel/types';
import  VanillaExample from './FileUpload';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false
    }

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    })
  }

  render() {
    return (
      <div className="App" style={{ textAlign: "center" }}>
        <Button color="info" onClick={this.toggle}>모달 열기</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>확인</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>취소</Button>
          </ModalFooter>
        </Modal>
        <VanillaExample></VanillaExample>
      </div>
    )
  }
}
export default App;