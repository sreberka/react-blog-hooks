import React, {useCallback, useState} from 'react';
import './Data.css';
import {useHttp} from '../../hooks/http.hook'
import Spinner from '../Spinner/Spinner'
import {DataItem} from '../DataItem/DataItem'

export const Data = () => {
    const {loading, request, error, clearError} = useHttp()
    const [data, setData] = useState([])

    const getData = useCallback(async () => {
        const fetchedData = await request('https://jsonplaceholder.typicode.com/todos?_limit=10')
        setData(fetchedData)
    }, [request])

    if(loading) {
        return <Spinner />
    }

    return (
        <div className="data">
            <a href='/'>Go to home page</a>
            <div>
                <button onClick={getData}>Get the Data</button>
            </div>
            {!!data.length &&
                data.map((item,i) => <DataItem item={item} key={i} />)
            }
        </div>
    )
}

