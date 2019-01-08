import React from 'react';
import { connect } from 'react-redux';
import {
  editPost,
  fetchUserPosts,
  fetchPost
} from "../../actions/post_actions";
import PostCompose from "./post_compose";
import { withRouter } from 'react-router-dom';



const msp = (state, owns) => {
    debugger;
    let currPost = state.posts.user[owns.match.params.id]
    // let currPost = state.posts.user[owns.match.params.id]
    return {
        post: currPost,
        
    };

}

const mdp = (dispatch) => {
    return ({

        fetchPost: id => dispatch(fetchPost(id)),
        fetchUserPosts: id => dispatch(fetchUserPosts(id)),
        action: event => {
            // debugger;
           return dispatch(editPost(event))
        }
    })
}

class EditForm extends React.Component {
    componentDidMount() {
        let id = this.props.post._id;
        this.props.fetchPost(id);
    }
    render() {
        if(this.props.post === null){
            return " "
        }
        const { action, post } = this.props;
        return <PostCompose action={action} post={post} />;
    }
}


export default withRouter(connect(msp, mdp)(EditForm));