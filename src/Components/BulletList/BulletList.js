import React, { Component } from 'react'

class BulletList extends Component {
    render() {
        return (
            <ul classname='bullet-list'>
                {this.props.bullets.map(bullet => {
                    return <li>{bullet}</li>
                })}
            </ul>
        )
    }
}

export default BulletList