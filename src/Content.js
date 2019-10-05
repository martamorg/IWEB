import React from 'react';
import Question from './Question';
import Answer from './Answer';
//import Image from './Image'
//import Score from './Score';

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
            </div>
          /*  <div>
                <Image/>
            </div> */
    );
    }
}