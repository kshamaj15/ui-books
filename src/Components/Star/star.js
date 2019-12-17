import React from 'react'
import Rate from './rate'

const star = props => {
    for(let i=0; i<props.count; i++){
        //console.log(props.count)
        return (
        <Rate></Rate>
        )
    }
}

export default star;