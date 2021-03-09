const PostPreview = props => {
    const parseContent = () => {
        let tmp = document.createElement("DIV");
        tmp.innerHTML = props.content;
        return (tmp.textContent || tmp.innerText || "").substr(0,100);
    }
    return (
        <div className="post col-12 col-md-6 mt-30 col-xl-4 mb-30 px-15">
            <article>
                <div className="thumb" style={{backgroundImage: `url(${props.thumb})`}}></div>
                <div className="content p-25">
                    <div className="title mb-15">
                        <h3 dangerouslySetInnerHTML={{ __html: props.title }}></h3>
                    </div>
                    <div className="body" dangerouslySetInnerHTML={{ __html: parseContent() + '...' }}>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default PostPreview