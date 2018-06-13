import React, { Component } from 'react';
import BlogPost from './BlogPost';
class Blog extends Component {

    state = {
        currPage: 1,
        totalPages: 1
    }

    getPaginationLinks = () => {
        let newArr = [];
        //5 because we only show 5 posts per page
        for (let i = 0; i < Math.ceil(this.props.blogData.length / 5); i++) {
            newArr.push(<li key={i + 1} onClick={() => this.pgChange(i + 1)}><a>{i + 1}</a></li>)
        }
        return newArr;
    }
    // getPaginationLinks = () => {
    //     let newArr = [];
    //     //5 because we only show 5 posts per page, 10 is the max number of paginators
    //     //startIndex is either the current page if the current page is greater than 10, or 1 otherwise
    //     //endIndex is either startIndex + 10 if the total number of pages is greater than 10, or the current length of blogData[] + 1 if not
    //     const startIndex = (this.state.currPage >= 10) ? this.state.currPage - 10 : 1
    //     const endPage = 
    //                     (this.state.totalPages > 10) ? 
    //                         (
    //                             ((startIndex + 10) < this.state.totalPages) ? 
    //                             startIndex + 10 : 
    //                             this.state.totalPages
    //                         ) : 
    //                     this.state.totalPages + 1;
    //     for (let i = startIndex; i < endPage; i++) {
    //         newArr.push(<li key={i} onClick={() => this.pgChange(i)}><a>{i}</a></li>)
    //     }
    //     return newArr;
    // }
    blogPostBuilder = () => {
        let newArr = [];
        let startIndex = (((this.state.currPage * 5) - 5) > 0) ? (this.state.currPage * 5) - 5 : 0;
        const endIndex = ((this.state.currPage * 5) > this.props.blogData.length) ? this.props.blogData.length : this.state.currPage * 5;
        for (; startIndex < endIndex; startIndex++) {
            newArr.push(<BlogPost key={startIndex} post={this.props.blogData[startIndex]}/>)
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
                <nav aria-label="Page navigation">
                    <ul className="pagination">

                        <li>
                            <a onClick={this.pgPrev} aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>

                        {this.getPaginationLinks()}

                        <li>
                            <a onClick={this.pgNext} aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>

                    </ul>
                </nav>
            </div>
        );
    }
}

export default Blog;