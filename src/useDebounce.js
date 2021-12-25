import { useEffect } from 'react'

const useDebounce = (value, time, callback) => {
    
    useEffect( () => {
        console.log('use debounce updated')
        const timer = setTimeout( () => {
            console.log('callback')
            callback();
        }, time);
        return () => clearTimeout(timer)
    }, [callback, time, value]);
};

export default useDebounce
