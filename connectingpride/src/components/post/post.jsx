import "./post.css"

export default function Post() {

    return (
        <div className="post"> 
            <img className="postImage" src = "/images/default_photo.avif" alt="no_photo" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">cat 1 cat 2</span> 
                </div>
                    <span className="postTitle">title</span>
                    <hr />
                <span className="postDate">
                    today
                </span>
            </div>
            <p className="postSummary">shaklasdaufhdauf asiodgfo isDBAKJSDBKASG DFUASOIUEGALKgeaifougdkjfdgayegihfhgfhgfjhfhjhgjfhgfjf</p>

        </div>     
    )
}
