import React from 'react'; // JSX translates intro React.createElement() whici=h intern uses the react lib that is why we need the react import

//function Greet() {
//    return <h1>Hello Vishwas</h1>
//}

//extracting name and heroName from props object
export const Greet = props => {
    const {name, heroName} = props
//    console.log(props);
//    props.name='Test'; TypeError: Cannot assign to read only property 'name' of object '' - because props is immutable
    return (
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1>
            {/* {props.children}  if no children is specified props.children renders nothing */}
        </div>
    );
}

//export de fault Greet;