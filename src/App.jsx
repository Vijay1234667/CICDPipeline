import React from 'react'

const App = () => {
  return (
    <>
      <h6>Hello Vercel CI/CD!</h6>
          <p>{undefinedVariable}</p> {/* This will break the build */}

    </>
  )
}

export default App
