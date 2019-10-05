import React from 'react';
import ActionBar from "./ActionBar";
import Content from "./Content";
import "../src/App.css"

export default class Game extends React.Component {
    render() {
        return (
            <div>

                <Content
                    currentQuestion={this.props.question}
                    currentIndex = {this.props.currentQuestion}
                    onQuestionAnswerGame = {this.props.onQuestionAnswer}
                    finished = {this.props.finished}
                    score = {this.props.score}

                    />

                <ActionBar
                    onChangeQuestion = {this.props.onChangeQuestion}
                    currentIndex = {this.props.currentQuestion}
                    questionsLength = {this.props.questionsLength}
                    onSubmit = {this.props.onSubmit}/>

            </div>
        );
    }
}