import {createContext } from 'react'


export const TechContext = createContext({})

export function TechContextContaineer (props: any) {

     

    return (
     <TechContext.Provider value={{}}>
        {props.children}
     </TechContext.Provider>
    )
}