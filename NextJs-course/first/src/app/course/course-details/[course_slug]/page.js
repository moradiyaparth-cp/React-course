import React from 'react'

const CourseDetailPage = ({params}) => {
  return (
    <>
        <main>
            <h1>This is the course detail page</h1>
        </main>
        <main>
            <h2>course detail of {params.course_slug}</h2>
        </main>
    </>
  )
}

export default CourseDetailPage