import { setFilter } from '../slices/dataSlice';
import { useDispatch } from 'react-redux';
import { Input } from 'antd';

const Searcher = () => {

    const dispatch = useDispatch();

    const handleOnChange = (e) => {
        const inputValue = e.target.value.toLowerCase()
        dispatch(setFilter(inputValue));
    }

    return <Input.Search 
        placeholder="Buscar..." 
        onChange={handleOnChange}
        style={{marginBottom: '10px'}} />
}

export { Searcher }