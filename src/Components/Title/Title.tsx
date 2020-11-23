import React from 'react'

interface propsInterface{
    children:string
}


const Title =(props:propsInterface)=>{


return (<h3>{props.children}</h3>)
}
export {Title}