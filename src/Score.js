import React from 'react'

export default class Score extends React.Component {

    render(){
        return(
            <div>
                Score: {this.props.finished ? this.props.score : "no answers submitted"}
            </div>
        )
    }
}