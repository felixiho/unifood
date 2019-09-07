/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ReportModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: props.modal,
      nestedModal: props.nestedModal,
      closeAll: props.closeAll
    };

    this.toggle = this.toggle.bind(this);
    this.toggleNested = this.toggleNested.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleClickReport(e){
    e.preventDefault();
    this.toggle();
  }

  toggleNested() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: false
    });
  }

  toggleAll() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: true
    });
  }

  render() {
    return (
      <div>  
        <a href="/" onClick={ e => this.handleClickReport(e)}>Report </a>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Report Comment</ModalHeader>
          <ModalBody>
             
            <br />
            <Button color="success" onClick={this.toggleNested}>Submit</Button>
            <Modal isOpen={this.state.nestedModal} toggle={this.toggleNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
              <ModalHeader>Check</ModalHeader>
              <ModalBody>Action is irreversible</ModalBody>
              <ModalFooter>
                <Button  onClick={this.toggleNested}>Cancle</Button>{' '}
                <Button color="primary" onClick={this.toggleAll}>Submit</Button>
              </ModalFooter>
            </Modal>
          </ModalBody>
          <ModalFooter> 
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ReportModal;