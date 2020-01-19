import React, {useState} from 'react';
import './App.css';
import posts from './data/posts';
import filters from './data/filters';
import TheHeader from './components/TheHeader';
import TheContainer from './components/TheContainer';
import TheFooter from './components/TheFooter';

function App() {
  const [step, setStep] = useState(0);
  const [actualPosts, setActualPosts] = useState(posts);
  const [image, setImage] = useState('');
  const [filterSelected, setFilterSelected] = useState('');
  const [caption, setCaption] = useState('');
  
  const handleSharePost = (post) =>{
      setActualPosts([...actualPosts, post]);
  };
  const handleGoHome = () => {
    setStep(0);
  }
  const handleNext = () => {
    setStep(step + 1);
  }
  const handleShare = () => {
    const newPost =   {
      username: 'maritxis',
      userImage: 'https://www.elcomercio.com/files/article_main/uploads/2019/02/08/5c5df92fccbed.jpeg',
      postImage: image,
      likes: '',
      hasBeenLiked: false,
      caption,
      filter: filterSelected,
    }
    setActualPosts([...actualPosts, newPost]);
    handleGoHome();
  }
  const handleUploadImage = (ev) => {
    const files = ev.target.files;
    if (!files.length) return;
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (ev) => {
      setImage(ev.target.result);
      setStep(1);
    }
    //document.querySelector('#file').value = ''
  }

  const handleLikes = (index) => {
    const postIsLiked = {...actualPosts[index], likes: actualPosts[index].likes + 1 };
    const newPosts = index === 0 ?
       [postIsLiked, ...actualPosts.slice(index + 1, actualPosts.length + 1)] :
        [...actualPosts.slice(0, index), postIsLiked, ...actualPosts.slice(index + 1, actualPosts.length + 1)]
    setActualPosts(newPosts);
  }

  const selectFilter = (id) => {
    console.log('setting filter', id)
    setFilterSelected(id);
  }

  return (
    <div className="App">
      <TheHeader 
        step={step}
        handleGoHome={handleGoHome}
        handleNext={handleNext}
        handleShare={handleShare}
      />
      <TheContainer 
        step={step} 
        posts={actualPosts} 
        filters={filters} 
        handleSharePost={handleSharePost}
        image={image}
        selectFilter={selectFilter}
        setCaption={setCaption}
        setLikes={handleLikes}
      />
      <TheFooter 
        step={step}
        handleUploadImage={handleUploadImage}
      />
    </div>
  );
}

export default App;
