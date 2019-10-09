import React from 'react';
import "../src/App.css";
export default class ActionBar extends React.Component {


      render() {
          return (
              <div>
                  <button onClick ={() => {
                      if ((this.props.currentIndex) !== 0) {
                          this.props.onChangeQuestion('Anterior')
                      }
                  }
                  }
                      className = {(this.props.currentIndex) === 0 ? "no_clickable" : "clickable"} > Anterior
                  </button>

                  <button onClick ={() => {
                          this.props.onSubmit()
                  }
                  }
                  > Submit
                  </button>

                  <button onClick ={() => {
                      if ((this.props.currentIndex +1) !== this.props.questionsLength) {
                          this.props.onChangeQuestion('Siguiente')

                      }
                  }}
                  className = {(this.props.currentIndex+1) === this.props.questionsLength ? "no_clickable" : "clickable"} > Siguiente
                  </button>
              </div>

      );
      }
}