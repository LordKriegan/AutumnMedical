import React, { Component } from 'react';
import BlogPost from './BlogPost';
class Blog extends Component {

    state = {
        currPage: 1,
        totalPages: 1
    }

    blogPostBuilder = () => {
        let newArr = [];
        let startIndex = (((this.state.currPage * 5) - 5) > 0) ? (this.state.currPage * 5) - 5 : 0;
        const endIndex = ((this.state.currPage * 5) > this.props.blogData.length) ? this.props.blogData.length : this.state.currPage * 5;
        for (; startIndex < endIndex; startIndex++) {
            newArr.push(<BlogPost key={startIndex} post={this.props.blogData[startIndex]} />)
        }
        return newArr;
    }
    componentDidMount() {
        this.setState({
            currPage: 1,
            totalPages: Math.ceil(this.props.blogData.length / 5)
        })
    }
    pgNext = () => {
        if (this.state.currPage < this.state.totalPages) {
            this.pgChange(this.state.currPage + 1);
        }
    }

    pgPrev = () => {
        if (this.state.currPage > 1) {
            this.pgChange(this.state.currPage - 1);
        }
    }

    pgChange = (pageNum) => {
        console.log("Changing to page " + pageNum + ".");
        if (this.state.currPage !== pageNum) {
            this.setState({
                currPage: pageNum
            }, () => console.log(this.state))
        }
    }

    render() {

        return (
            <div id="blogWindow" className="col-xs-6 col-xs-offset-3">
                {/* blog posts go here */}
                {this.blogPostBuilder()}
                {/*Paginator*/}
                <ul class="pager">
                    <li onClick={this.pgPrev} className="previous"><a>Previous</a></li>
                    <li onClick={this.pgNext} className="next"><a>Next</a></li>
                </ul>
            </div>
        );
    }
}

export default Blog;