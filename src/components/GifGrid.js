import React from 'react'
import { GridGifItem } from './GridGifItem';
import { useFetchGifs } from '../hooks/useFetchGifs'


export const GifGrid = ({category}) => {


    const { data } = useFetchGifs( category );


    return (
        <div className="flex-wrapper">
          {
            data.map( item => {
                return <GridGifItem key={item.id} 
                                    {...item} />
            })
          }

        </div>
    )
}
