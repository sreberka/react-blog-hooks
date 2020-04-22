import React, {useState, useEffect, useCallback} from 'react';
import {ItemsList} from '../ItemsList/ItemsList'
import {Form} from '../Form/Form';
import {Filter} from '../Filter/Filter';
import {Data} from "../Data/Data";
import Spinner from '../Spinner/Spinner'
import './Blog.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import {useHttp} from '../../hooks/http.hook'
import {BlogContext} from '../../context/BlogContext'

export const Blog = () => {
    const {loading, request, error, clearError} = useHttp()
    const [items, setItems] = useState([])
    const [author, setAuthor] = useState([])


    const loadItems = useCallback(async () => {
        try {
            const fetched = await request('https://blog-project-8015b.firebaseio.com/posts.json')
            setItems(Object.keys(fetched).map(key => ({...fetched[key], id: key})))
        } catch (e) {}
    }, [request])

    const removeItem = useCallback(async (id) => {
        try {
            await request(`https://blog-project-8015b.firebaseio.com/posts/${id}.json`, 'DELETE')
            setItems(items.filter(i => i.id !== id))
        } catch (e) {}
    }, [request, items])

    const addItem = useCallback(async (newItem) => {
        try {
            const response = await request(`https://blog-project-8015b.firebaseio.com/posts.json`, 'POST', newItem)
            setItems(items.concat({...newItem, id: response.name}))
        } catch (e) {}
    }, [request, items])

    const filterItems = useCallback((auth) => {
        setAuthor(auth)
    }, [author])


    useEffect(() => {
        loadItems()
    }, [loadItems])

    if (loading) {
        return <Spinner />
    }

    return (
        <BlogContext.Provider value={{removeItem, addItem, filterItems}}>
            <div className="blog">
                <Router>
                    <Switch>
                        <Route exact path='/'>
                            <a href='/data'>Go to data page</a>
                            <Filter items={items} />
                            {!loading && <ItemsList items={items} author={author}/>}
                            <Form />
                        </Route>
                        <Route exact path='/data' component={Data} />
                    </Switch>
                </Router>
            </div>
        </BlogContext.Provider>
    )
}
