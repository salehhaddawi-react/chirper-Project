import React from "react";
import {connect} from "react-redux";
import {formatDate, formatTweet} from "../utils/helpers";
import {TiArrowBackOutline} from "react-icons/all";
import {TiHeartOutline} from "react-icons/all";
import {TiHeartFullOutline} from "react-icons/all";
import {handleToggleTweet} from "../actions/tweets";
import {Link, withRouter} from "react-router-dom";

class Tweet extends React.Component {
    toParent = (e, id) => {
        e.preventDefault();

        this.props.history.push(`/tweet/${id}`);
    }

    handleLike = (e) => {
        e.preventDefault();

        const {dispatch, tweet, authedUser} = this.props;

        dispatch(handleToggleTweet({
            id: tweet.id,
            hasLiked: tweet.hasLiked,
            authedUser
        }));
    }

    render() {
        const {tweet} = this.props;

        if (tweet === null) {
            return <div>This Tweet doesn't exists!!</div>
        }

        const {
            name, avatar, timestamp, text, hasLiked, likes, id, replies, parent
        } = tweet;

        return (
            <Link to={`/tweet/${id}`} className="tweet">
                <img src={avatar} alt={`name of ${name}`} className={'avatar'}/>
                <div className={'tweet-info'}>
                    <div>
                        <span>{name}</span>
                        <div>
                            {formatDate(timestamp)}
                        </div>
                        {parent && (
                            <button className={'replying-to'} onClick={(e) => this.toParent(e, parent.id)}>
                                Replying to @{parent.author}
                            </button>
                        )}
                        <p>{text}</p>
                        <div className={'tweet-icons'}>
                            <TiArrowBackOutline className={'tweet-icon'} />
                            <span>{replies !== 0 && replies}</span>
                            <button className={'heart-button'} onClick={this.handleLike}>
                                { hasLiked ? <TiHeartFullOutline className="tweet-icon" color="#e0245e"/> : <TiHeartOutline className="tweet-icon"/> }
                            </button>
                            <span>{likes !== 0 && likes}</span>
                        </div>
                    </div>
                </div>
            </Link>
        );
    }
}

function mapStateToStore({authedUser, users, tweets}, {id}) {
    const tweet = tweets[id];
    const author = tweet ? users[tweet.author] : null;
    const parentTweet = tweet ? tweets[tweet.replyingTo] : null;

    return {
        authedUser,
        tweet: tweet && author ?
            formatTweet(tweet, author, authedUser, parentTweet) :
            null
    }
}

export default withRouter(connect(mapStateToStore)(Tweet));
