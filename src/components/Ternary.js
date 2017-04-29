import React, { Component } from 'react'

class Ternary extends Component {
  render () {
// JS Ternary
    var age = 20

    if (age >= 21) {
      console.log('You are an adult')
    } else {
      console.log('You are a kid')
    }

// same thing as a ternary
    console.log(age >= 21 ? 'You are an adult.' : 'You are a kid.')

// or as a multi-line ternary
    var stop

    age > 18 ? (
      console.log('OK, you can go.'),
      stop = false
    ) : (
      console.log('Sorry, you are much to young!'),
      stop = true
    )

// ternary within a ternary
    var firstCheck = false,
      secondCheck = false,
      access = firstCheck ? 'Access denied' : secondCheck ? 'Access denied' : 'Access granted'

    console.log(access)

    return (
      <div>
        <h2>JS Nuggets: Ternary Operator</h2>
        <p>Some notes here or open the console</p>
      </div>
    )
  }
}

export default Ternary
