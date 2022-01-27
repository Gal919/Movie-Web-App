import React from 'react';
import Lottie from 'react-lottie';
import movie from '../images/movie.png';
import loadingAnim from '../lottie/lf30_editor_5h9ao3ga.json';

const Loading = () => {
    
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: loadingAnim,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    return <div>
        <Lottie options={defaultOptions} width={250} height={250} />
        <div className='image-container'>
        <img className='backgroung-image' src={movie} alt='movie' />
      </div>
    </div>;
}

export default Loading;
