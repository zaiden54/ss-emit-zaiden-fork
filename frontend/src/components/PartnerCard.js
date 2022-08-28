import React from 'react'


export const PartnerCard = (props) => {

    return(
        <div className="partners_card">
            <img src={props.img} alt="" /><span>{props.span}</span>
        </div>
    )
}

export default PartnerCard;