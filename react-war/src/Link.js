import React from "react"
import { Link } from "react-router-dom"

class Links extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div>
                <h1>Welcome to Star War</h1>
                {this.props.data.map((each, id) =>
                    <div>
                        <Link to={`/${id + 1}`}>
                            <h2>{each.name}</h2>
                        </Link>
                    </div>
                )}
            </div>
        )
    }
}
export default Links;