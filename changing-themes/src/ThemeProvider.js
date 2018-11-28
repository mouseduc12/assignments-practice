import React from "react";

export const { Provider, Consumer } = React.createContext()

class ThemeProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: "dark"
        }
    }

    toggleHandle = () => {
        this.setState(prevState => {
            return {
                theme: prevState.theme === "dark" ? "light" : "dark"
            }
        })
    }

    render() {
        return (
            <Provider value={{
                theme: this.state.theme,
                toggleHandle: this.toggleHandle
            }} >
                {this.props.children}
            </Provider>
        )
    }
}

export const withTheme = C => props => (
    <Consumer>
        {value => <C {...value} {...props}/>}
    </Consumer>
)

export default ThemeProvider;    