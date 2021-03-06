import React from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
 
//props: closeModal[click listener], children[inner content], show[boolean],   
class Modal extends React.Component {

    //The wrapping element controls the updating of the wrapped element. This prevents OrderSummary from updating needlessly
    shouldComponentUpdate(nxtProps, nxtState) {
        return nxtProps.show !== this.props.show || nxtProps.children !== this.props.children;
    } 

    render() {
        const style = {
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? 1 : 0
        }
    
        return(
            <>  <Backdrop show={this.props.show} closeModal={this.props.closeModal} />
                <div className={classes.Modal} style={style}>
                    {this.props.children}
                </div>
            </>
        )
    }
    
};


export default Modal;