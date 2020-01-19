import React from 'react';

const CardPost = ({post, like}) => {
  return (
    <article className="card-post">
      <div className="header level">
        <div className="level-left">
          <figure className="image is-32x32" width="5px">
            <img src={post.userImage} alt={post.userName}/>
          </figure>
          <span className="username">{post.username}</span>
        </div>
      </div>
      <div 
        className="image-container"
        onDoubleClick={like}>
        <figure className="image is-200x200">
          <img src={post.postImage} alt=""/>
        </figure>
      </div>
      <div className="content">
        <div className="heart">
          <button onClick={like} aria-label="You like">
            <i className="far fa-heart fa-lg"><span>{post.userName}</span></i>
          </button>
        </div>
        <p className="likes">{post.likes}</p>
        <p className="caption"><span>{post.username + ' '}</span>{post.caption}</p>
      </div>
    </article>
  );
}

export default CardPost;