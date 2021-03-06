import React, { Component } from 'react'
import './BulletList.scss';

class BulletList extends Component {
    render() {
        return (
            <ul className='bullet-list'>
                {this.props.bullets.map((bullet, i) => {
                    return <li key={i}>{bullet}</li>
                })}
            </ul>
        )
    }
}

export default BulletList