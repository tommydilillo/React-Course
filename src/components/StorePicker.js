import React from 'react';
import PropTypes from "prop-types";
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    myInput = React.createRef();
    static PropTypes = {
        history: PropTypes.object
    };
    // constructor() {
    //     super();
    //     console.log('Gonna create component')
    //     this.goToStore = this.goToStore.bind(this);
    // }

    goToStore = (event) => {
        // 1. Stop form from submitting
        event.preventDefault();
        // 2. Get text from input
        const storeName = this.myInput.value.value; // 1st value is react, 2nd value is javascript
        // 3. Change the page to /store/whatever-they-entered
        this.props.history.push(`/store/${storeName}`);


    }

    render() {
        return (
            <form action="" className="store-selector" onSubmit={this.goToStore}>
                {/* Store Picker Comment */}
                <h2>Please Enter a Store</h2>
                <input
                    type="text"
                    ref={this.myInput}
                    required
                    placeholder="Store Name"
                    defaultValue={getFunName()}>
                </input>
                <button type="submit">Visit Store →</button>
            </form>
        );
    }
}

export default StorePicker;