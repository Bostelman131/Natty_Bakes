import React from 'react'
import { BodySection } from 'components'
import { BodyData } from 'components/Data'

export default function Home() {
    return (
        <React.Fragment>
            <BodySection {...BodyData}/>
        </React.Fragment>
    )
}
