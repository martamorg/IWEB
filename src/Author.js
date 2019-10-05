import React from 'react'

export default class Author extends React.Component {

    render(){

        return(
            <figure>
                <img
                    src={this.props.currentQuestion.author.photo.url}
                    alt={this.props.currentQuestion.author.photo.filename}
                    width={"5%"}
                    height={"5%"}
                />
                <figcaption><small> created by: {this.props.currentQuestion.author.username} </small></figcaption>
            </figure>
        )
    }
}