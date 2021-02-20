import React from "react";
import s from './Post.module.css'
import {PostType} from "../../../../redux/store";

const Post: React.FC<PostType> = (props) => {
    return (
        <div className={s.item}>
            <img
                src='https://yt3.ggpht.com/a/AATXAJytBX4x38SJiFeRv9M9zdseNIPWzcWf_slSlz5b=s900-c-k-c0xffffffff-no-rj-mo'/>
            {props.message}
            <div>
                <span>{props.likeCount}</span>
            </div>
        </div>
    )
}

export default Post