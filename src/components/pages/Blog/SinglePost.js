import {connect} from 'react-redux'
import {getPost} from "../../../actions";
import {useEffect} from 'react'
import PostData from './PostData'
import Spinner from "../../Spinner";

const SinglePost = ({post, match, getPost, currentPage}) => {
    useEffect(() => {
        getPost(match.params.id)
        return () => {
            getPost(null)
        }
    }, [getPost, match.params.id])
    return (
        <section className="container px-25 single-post pt-25">
            <h1 className='big d-none d-sm-block mt-60'>my <span>blog</span></h1>
            <p className="title-bg d-none d-sm-block">posts</p>
            {(post && post._embedded) ? <PostData post={post}/>
                 :
                <div className="position-relative" style={{minHeight: '200px'}}>
                    <Spinner/>
                </div>
            }
        </section>
    )
}

const mapStateToProps = state => ({post: state.post, currentPage: state.currentPage})

export default connect(mapStateToProps, {getPost})(SinglePost)
