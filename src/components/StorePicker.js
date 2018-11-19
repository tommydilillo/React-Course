import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    myInput = React.createRef();

    // constructor() {
    //     super();
    //     console.log('Gonna create component')
    //     this.goToStore = this.goToStore.bind(this);
    // }

    goToStore = (event) => {
        //Stop form from submitting
        event.preventDefault();
        // Get text from input
        console.log(this.myInput);
        //Change the page to /Store/whatever-they-entered
        console.log("going to store")
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