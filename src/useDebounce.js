import { useEffect } from 'react'

const useDebounce = (value, time, callback) => {
    
    useEffect( () => {
        const timer = setTimeout( () => {
            callback();
        }, time);
        return () => clearTimeout(timer)
    }, [callback, time, value]);
};

export default useDebounce
