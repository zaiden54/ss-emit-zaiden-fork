import React from 'react'


export const PartnerCard = (props) => {

    return(
        <div className="partners_card">
            <img src={props.img} alt="" />
            <span style={{display: (props.span ? 'inline-block' : 'none')}}>{props.span}</span>
        </div>
    )
}

export default PartnerCard;