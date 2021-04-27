import React from "react";

class NewTweet extends React.Component {
    state = {
        text: ''
    }

    handleChange = (e) => {
        const text = e.target.value;

        this.setState(() => ({
            text
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const {text} = this.state;

        // TODO: add tweet to store

        this.setState(() => ({
            tex: ''
        }))
    }

    render() {
        const {text} = this.state;
        const tweetLeft = 280 - text.length;

        return (
            <div>
                <h3 className="center">
                    Compose New Tweet
                </h3>
                <form className="new-tweet" onSubmit={this.handleSubmit}>
                    <textarea
                        placeholder="What's Happening?"
                        value={text}
                        onChange={this.handleChange}
                        className="textarea"
                        maxLength={280}
                    />
                    {tweetLeft <= 100 && (
                        <div className="tweet-length">
                            {tweetLeft}
                        </div>
                    )}

                    <button className="btn" onClick={this.handleSubmit} disabled={text === ''}>
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default NewTweet;