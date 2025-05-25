import { useDispatch } from 'react-redux';
import { setDarkMode } from '../redux/darkMode';
import { setItem } from '../core/common/storage.services';
const useToggleDarkMode = () => {
    const dispatch = useDispatch();
    const toggle = (darkMode) => {
        const newDarkMode = !darkMode;
        setItem('theme', newDarkMode);
        dispatch(setDarkMode(newDarkMode));
    };

    return toggle;
};
export default useToggleDarkMode