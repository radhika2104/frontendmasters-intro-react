const Pet = (props) => {
    return React.createElement("div",{},[

        React.createElement("h1",{}, props.name),
        React.createElement("h2",{}, props.animal),
        React.createElement("h2",{}, props.breed)
    ])
}

const App = () => {
    return React.createElement("div",{},[
        React.createElement("h1",{},"Adopt Me!"),
        React.createElement(Pet,{name:"Luna",animal:"rabbit",breed:"Mix"}),
        React.createElement(Pet,{name:"Tera",animal:"dog",breed:"Retriever"}),
        React.createElement(Pet,{name:"Shiba",animal:"cat",breed:"Mix"}),
    ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"))