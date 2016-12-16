var React = require('react');
var { Modal } = require('react-bootstrap');


var ErrorModal = React.createClass({
  getDefaultProps: function () {
    return {
      title: 'Error'
    }
  },
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
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
    var {title, message} = this.props;
    return (
      <div>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
           <Modal.Body>
              <p>{message}</p>
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
