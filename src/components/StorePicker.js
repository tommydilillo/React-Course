import React from 'react';

class StorePicker extends React.Component {
    render() {
        return (
            <form action="" className="store-selector">
                {/* Store Picker Comment */}
                <h2>Please Enter a Store</h2>
                <input type="text" required placeholder="Store Name"></input>
                <button type="submit">Visit Store →</button>
            </form>
        );
    }
}

export default StorePicker;