var React = require('react');
var { Modal } = require('react-bootstrap');


var ErrorModal = React.createClass({
  getInitialState: function () {
    return {
      showModal: false
    }
  },
  close: function () {
    this.setState({ showModal: false });
  },
  open: function () {
    this.setState({ showModal: true });
  },
  componentDidMount: function () {
    this.open();
  },
  render: function () {
    return (
      <div>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>City not found!</Modal.Title>
          </Modal.Header>
           <Modal.Body>
              <p>Some text</p>
              <button onClick={this.close}>
                OK
              </button>
           </Modal.Body>
        </Modal>
      </div>
    )
  }
});

module.exports = ErrorModal;
