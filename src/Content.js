import React from 'react';
import Question from './Question';
import Answer from './Answer';
import Image from './Image';
import Author from './Author';
import Tips from './Tips';

export default class Content extends React.Component {
    render() {
        return (
                <div>

                    <Question
                            currentIndex = {this.props.currentIndex}
                            currentQuestion={this.props.currentQuestion}
                    />
                    <Answer
                            currentQuestion={this.props.currentQuestion}
                            onQuestionAnswerGameContent = { this.props.onQuestionAnswerGame }
                    />
                    <Image
                            currentQuestion={this.props.currentQuestion}
                    />
                    <Author
                            currentQuestion={this.props.currentQuestion}
                    />
                    <Tips
                            currentQuestion={this.props.currentQuestion}
                    />
                </div>

            );
    }
}