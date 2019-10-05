import React from 'react'

export default class Image extends React.Component {

    render(){

        return(
            <figure>
                <img
                    src={this.props.currentQuestion.attachment.url}
                    alt={this.props.currentQuestion.filename}
                    width={"40%"}
                    height={"40%"}
                />
            </figure>

        )
    }
}