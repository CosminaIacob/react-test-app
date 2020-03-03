import React from 'react';

const Hello = () => {
//    return  (
//        <div className='dummyClass'>
//            <h1> Hello Cosmina JSX version</h1>
//        </div>
//    );

//    this method accepts at least min 3 params;
//    first param is a String which specifies the html tag to be rendered
//    second param- any optional properties
//    third param is the children for the html element
    return React.createElement(
        'div',
        {id: 'Hello', className: 'dummyClass'},
        React.createElement('h1', null, 'Hello Cosmina version without JSX')
    );
}

export default Hello;