import React from 'react';
import CardPost from './CardPost';
import CardFilter from './CardFilter';

function TheContainer({step, posts, image, filters, selectFilter, setCaption, setLikes}) {
  
  const style = {
    backgroundImage: 'url(' + image +')',
    height: '330px',
    zIndex: 0,
  }
  return (
    <div className="TheContaniner">
      {step===0 && posts.map((post, index) => 
        <CardPost 
          post={post} 
          like={() => setLikes(index)} 
          key={index}
        />)}
      {step===1 && 
        <div
          className="selected-image"
          style={style}>
            <div className="filter-container">
              {filters.map((filter, index) => {
                return <CardFilter filter={filter} key={index} selectFilter={selectFilter}/>
              })}
            </div>
        </div>
      }
      {step === 2 &&
        <>
          <div className="selected-image"
            style={style}>
          </div>
          <div className="caption-input">
            <textarea
              placeholder="Write a caption..."
              type="text" 
              name="caption" 
              id="caption"
              onBlur={(ev) => setCaption(ev.target.value)}>
            </textarea>
          </div>
        </>
      }
    </div>
  );
}

export default TheContainer;