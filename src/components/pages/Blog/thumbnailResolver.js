const thumbnailResolver = (post, size = null) => {
    let thumb = ''
    if (size && post._embedded['wp:featuredmedia']) {
        return post._embedded['wp:featuredmedia'][0].media_details.sizes[size].source_url
    }
    if(post._embedded['wp:featuredmedia']) {
        const size = post._embedded['wp:featuredmedia'][0].media_details.sizes.medium ||
            post._embedded['wp:featuredmedia'][0].media_details.sizes.blog
        thumb = size.source_url
    }
    return thumb
}
export default thumbnailResolver