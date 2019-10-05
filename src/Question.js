import React from 'react'

export default class Question extends React.Component {

    render(){
        return(
            <div>
                 Question {this.props.currentIndex + 1}:
                            {this.props.currentQuestion.question}
            </div>
        )
    }
}