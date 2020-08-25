import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const MainApp = () => {

    //const categories = ['One Puch', 'Zamurai'];
    const [categories, setCategories] = useState(['Got']);

   /*  const handleAdd = () => {
        setCategories([...categories, 'beaking bad']);
    }; */

    return(
        <>
         <h2>Bienvenido a Gif Expert App</h2>
         <AddCategory onadd={ setCategories } /> 
         <hr />
         
         <ul>
             {
                 categories.map( item => {
                    return <GifGrid
                                key={item} 
                                category={item} />
                 })
             }
         </ul>
        </>
    );
};

export default MainApp;