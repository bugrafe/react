import React from 'react'
import Welcome from './welcome'

const Greetings = () => {
  return (
    <div>
        <h1>Props</h1>
        <Welcome firstName="Buğra" lastName="Feriz" textColor="red"/>
        <Welcome firstName="Ayse" lastName="Feriz" textColor="orange"/>
        <Welcome firstName="Kubra" lastName="Feriz" textColor="greenyellow"/>
        

    </div>
  )}

export default Greetings