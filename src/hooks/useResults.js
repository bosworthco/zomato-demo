import { useEffect, useState } from 'react';
import zomato from '../api/zomato';

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            const response = await zomato.get(`/search?entity_id=95&entity_type=city&q=${searchTerm}`);
            // setResults(response.data.restaurants);
            console.log(response.data.restaurants);
        } catch (err) {
            setErrorMessage('Something went wrong');
        }
    }

    useEffect(() => {
        searchApi('Steak')
    }, [])

    return [searchApi, results, errorMessage];

}