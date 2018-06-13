import React, {Component} from 'react';

class BlogPost extends Component {
    render() {
        return(
            <div className="blogPost row">
                <div className="col-xs-6">
                    <h3 className="pull-left">{this.props.post.title}</h3>
                </div>
                <div className="col-xs-6">
                    <p className="pull-right">{new Date(this.props.post.timestamp).toLocaleDateString("en-US", { weekday: 'short', year: '2-digit', month: '2-digit', day: '2-digit' })}</p>
                </div>
                <div className="col-xs-12">
                    <p>{this.props.post.body}</p>
                </div>
            </div>
        )
    }
}

export default BlogPost;