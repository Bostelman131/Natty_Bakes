import React from 'react'
import { BodySection, PhotoBodySection } from 'components'
import { BodyData, PhotoBodyData } from 'components/Data'

export default function Home() {
    return (
        <React.Fragment>
            <BodySection {...BodyData}/>
            <PhotoBodySection {...PhotoBodyData}/>
        </React.Fragment>
    )
}
