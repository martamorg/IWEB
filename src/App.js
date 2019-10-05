import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Game from "./Game";
import {questionAnswer, changeQuestion, submit} from './redux/actions';

function App(props) {
  return (
      <div className="App">
        <Game
        question={props.questions[props.currentQuestion]}
        onQuestionAnswer={(answer)=>{props.dispatch(questionAnswer(props.currentQuestion,answer))}}
        currentQuestion = {props.currentQuestion}
        onChangeQuestion = { (change) => {props.dispatch(changeQuestion(props.currentQuestion,change))}}
        questionsLength = {props.questions.length}
        finished = {props.finished}
        score = {props.score}
        onSubmit = {()=>this.props.dispatch(submit(this.props.questions))}
        //fetch = {this.props.fetch}
              />

    </div>

  );
}

function mapStateToProps(state) {
  return{
    ...state
  };
}

export default connect(mapStateToProps)(App);