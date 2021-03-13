import {connect} from 'react-redux'
import {getPosts} from '../../../actions'

const Nav = props => {
    const buildListData = () => {
        const data = []
        for (let i = 1; i <= props.blog.totalPages; i++) {
            data.push({
                number: i,
                active: props.blog.currentPage === i
            })
        }
        return data
    }

    return <ul className="icons blog-nav d-block text-center">
        {
            buildListData().map(
                data =>
                    <li
                        onClick={() => props.getPosts(data.number)}
                        key={data.number}
                        className={(data.active ? 'active ' : '') + 'mb-10'}
                    >
                        {data.number}
                    </li>
            )
        }
    </ul>
}

const mapStateToProps = state => ({
    blog: state.blog
})

export default connect(mapStateToProps, {getPosts})(Nav)