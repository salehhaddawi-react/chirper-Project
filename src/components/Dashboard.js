import React, { Component } from "react";
import { connect } from "react-redux";

class Dashboard extends Component {
    render() {
        return (
            <div>
                <h3 className="center">Your Timeline</h3>
                <ul className="dashboard-list">
                    {this.props.tweetIds.map(id => (
                        <li key={id}>
                            <span>Tweet ID is: {id}</span>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToStore({ tweets }) {
    return {
        tweetIds: Object
            .keys(tweets)
            .sort((a, b) => tweets[a].timestamp - tweets[b].timestamp)
    }
}

export default connect(mapStateToStore)(Dashboard);