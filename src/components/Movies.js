import React from 'react'
import johnwickPoster from '../johnwick-poster.jpg';

function Movies() {
  return (
    <section>
        <h1 className='text-center font-bold text-2xl m-8 underline decoration-double'>Movies List</h1>
        <div className='flex content-start gap-4'>
            <div>
                <img src={johnwickPoster}/>
            </div>
            <div>
                <img src={johnwickPoster}/>
            </div>
            <div>
                <img src={johnwickPoster}/>
            </div>
        </div>
    </section>
  )
}

export default Movies;