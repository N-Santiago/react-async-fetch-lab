// create your App component here
import React from 'react'

export default class App extends React.Component {

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(data => {
            return data
        })
    
    }

    render() {
        return 'hello'
    }

}