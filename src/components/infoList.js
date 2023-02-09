import React from 'react'

export const infoList = (props) => {
    return(
        <ul>
            {props.information.map((info => {
                return  <li>
                            <div>
                                <img className={props.classNameImage} src="info.image"> </img>
                                <span className={props.classNameText}>{info.text}</span>
                            </div>
                        </li>
            }))}
        </ul>
    )
}