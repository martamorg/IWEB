import React from 'react'

export default class Answer extends React.Component {

    render(){

        return(
            <div>
                <input type="text" value={this.props.currentQuestion.userAnswer || ''}
                onChange={(e)=>{this.props.onQuestionAnswerGameContent(e.target.value);}}/>
            </div>

    )
    }
}