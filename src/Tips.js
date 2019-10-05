import React from 'react'

export default class Tips extends React.Component {

    render(){
        return(
            <div>
                Tips:
                {this.props.currentQuestion.question.tips}
            </div>
        )
    }
}