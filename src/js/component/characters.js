import React from 'react'

import { Card } from "./card";

export const Characters = () => {
  return (
    <>
    <div>
        <h1>Characters</h1>
    </div>
    <div className="row row-cols-1 row-cols-md-2 g-4">
        {/* <Card imageUrl="https://i.blogs.es/1da08b/1366_2000-9-/1366_2000.jpeg" title="Luke Skywalker" gender="male" hair="brown" eye="blue"/> */}
        <Card/>
    </div>
    </>
  )
}
