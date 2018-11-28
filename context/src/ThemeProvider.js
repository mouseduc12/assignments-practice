import React from "react";


export const { Provider, Consumer } = React.createContext()
class ThemeProvider extends React.Component {
    constructor() {
        super()
        this.state = {
            theme: "dark"
        }
    }

    toggleTheme = () => {
        this.setState(prevState => {
            return {
                theme: prevState.theme === "dark" ? "light" : "dark"
            }
        })
    }

    render() {
        return (
            <Provider value ={{
                theme: this.state.theme,
                toggleTheme: this.toggleTheme
            }}>
                {this.props.children}
            </Provider>
        )
    }
}


export const withTheme = C => props => (
    <Consumer>
        {value  => <C {...value} {...props}/>}
    </Consumer>
)

export default ThemeProvider