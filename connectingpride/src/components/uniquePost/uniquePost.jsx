import React from "react"
import "./uniquePost.css"

export default function UniquePost() {

    return (
        <>
            <div className="uniquePost">

                <div className="uniquePostWrapper">
                    <h1 className="uniquePostTitle">
                        Hello
                        <div className="editPost">
                            <i 
                                className="postIcon dar da-edit"
                                ></i>
                            <i 
                                className="postIcon dar da-trash-alt"
                                ></i>
                        </div>
                    </h1>
                        <img src="/images/background.jpeg" alt="post image" className="uniquePostImage"/>

                    <div className="uniquePostInfo">
                        <span className="uniquePostAuthor">     Author:
                                <b> andrew </b>
                        </span>
                        <span className="uniquePostDate"> today
                        </span>
                    </div>

                    <p className="uniquePostDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut tellus elementum sagittis vitae et leo. Urna et pharetra pharetra massa massa ultricies. Felis donec et odio pellentesque diam volutpat commodo sed egestas. Velit laoreet id donec ultrices tincidunt arcu non sodales neque. Est ante in nibh mauris cursus mattis. Elit pellentesque habitant morbi tristique. Eget magna fermentum iaculis eu non. Tellus rutrum tellus pellentesque eu tincidunt tortor. Risus quis varius quam quisque id diam vel quam elementum. Nunc aliquet bibendum enim facilisis gravida neque. Etiam tempor orci eu lobortis elementum nibh tellus.</p>
                    
                </div>
            </div>
        </>
    )
}