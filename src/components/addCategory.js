import React, { Component } from 'react';
import Modal from 'react-modal';
class AddCategory extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            modalIsOpen: false
         }
    }
    openModal=()=> {
                this.setState({modalIsOpen: true});
              }
             
    afterOpenModal=()=> {
                // references are now sync'd and can be accessed.
                this.subtitle.style.color = '#f00';
              }
             
    closeModal=()=> {
                this.setState({modalIsOpen: false});
              }
    render() {
        const customStyles = {
                        content : {
                          top                   : '50%',
                          left                  : '50%',
                          right                 : 'auto',
                          bottom                : 'auto',
                          marginRight           : '-50%',
                          transform             : 'translate(-50%, -50%)'
                        }
                      };
             
        return ( 
            <div className="col-lg-4 col-md-6 col-sm-12 add-mrgn">
                <img onMouseOver="" onClick={this.openModal} src={require('./plus.jpg')} alt="ajouter un element" />
                <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Add Modal"
        >
 
          <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <div>Add new movie</div>
          <form>
            <input type="text"/>
            <input type="file"/>
            <input type="text"/>
            <button>tab navigation</button>
            
          </form>
        </Modal>

            </div>
         );
    }
}
 
export default AddCategory;