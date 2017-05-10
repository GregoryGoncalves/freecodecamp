import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {change_display_value, change_operation} from '../actions/indexAction';

 class Button extends Component{
    render(){
        let {label, domain, display_value} = this.props;
        let change_display;
        let output;
        let isDisplayZero = display_value == 0 ? true : false;

        switch(domain){
            case 'number':
                if (!isDisplayZero) {
                    output = "" + display_value + label;
                }else{
                    output = label;
                }
                change_display = () => this.props.change_display_value(output);
                break;

            case 'clear':
                if(!isDisplayZero)
                    change_display = () => this.props.change_display_value(0);
                break;

            case 'toggle':
                if(!isDisplayZero){
                    output = display_value * -1;
                    change_display = () => this.props.change_display_value(output);
                }
                break;
            case 'dot':
                if(display_value.toString().indexOf('.') < 0){
                    output = display_value + '.';
                    change_display = () => this.props.change_display_value(output);
                }
                break;
            case 'percent':
                if(!isDisplayZero){
                    output = display_value / 100;
                    change_display = () => this.props.change_display_value(output);
                }
                break;
            case 'operation':
                if(!isDisplayZero){
                    output = label.toString();
                    change_display = () => this.props.change_operation(output);
                }
                break;
        }

        return(
        <div className="button" onClick={change_display}>
            {label}
        </div>
    )}
}

export default connect(
   state => ({
       display_value: state.display_value
   }),
   dispatch => ({
     change_display_value: bindActionCreators(change_display_value, dispatch),
     change_operation: bindActionCreators(change_operation, dispatch)
   })
)(Button);