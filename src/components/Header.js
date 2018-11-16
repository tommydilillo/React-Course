import React from 'react';

// Stateless functional component (refactored from code below)
const Header = (props) => (

    <header className='top'>
        <h1>Catch
            <span className="ofThe">
                <span className="of">Of</span>
                <span className="the">The</span>
            </span>
        </h1>
        <h3 className='tagline'>
            <span>{props.tagline}</span>
        </h3>
    </header>
);


/* REFACTORED ABOVE - since this component is not taking in any changes, it can be simplified and doesn't need the render */
// class Header extends React.Component {
//     render() {
//         return (

//             <header className='top'>
//                 <h1>Catch
//                     <span className="ofThe">
//                         <span className="of">Of</span>
//                         <span className="the">The</span>
//                     </span>
//                 </h1>
//                 <h3 className='tagline'>
//                     <span>{this.props.tagline}</span>
//                 </h3>
//             </header>


//         )
//     }

// }

export default Header;