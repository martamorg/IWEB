import React from 'react'

export default class Author extends React.Component {

    render(){

        return(
            <div>
                <img
                    src={this.props.currentQuestion.author.photo.url}
                    alt={this.props.currentQuestion.author.photo.filename}
                    width={"10%"}
                    height={"10%"}
                />
                <p> created by: {this.props.currentQuestion.author.username} </p>
            </div>
        )
    }
}