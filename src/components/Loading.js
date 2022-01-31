import React from 'react';
import Lottie from 'react-lottie';
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
    </div>;
}

export default Loading;
