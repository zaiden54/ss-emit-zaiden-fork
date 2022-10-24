import React, {useState} from 'react'




export const NewsCard = (props) => {

    const [newsSidePanel, setNewsSidePanel] = useState("")

    const cardStyle = {
        background: 'url(' + props.image + ') 50% 50%/auto 100% no-repeat'
    }

    

    // const handleClick = () => {

    //     const handleClose = () => {
    //         console.log("close")
    //         setNewsSidePanel("")    
    //     }

    //     setNewsSidePanel(
    //         <div className="side-panel-container">    
    //             <div className="side-panel-menu">
    //                 <div className="side-panel-title">{props.title.toUpperCase()}</div>
    //                 <div className="side-panel-exit" onClick={handleClose}>Закрыть</div>
    //             </div>
    //         </div>
    //     )
    // }

    return (
        <div style={cardStyle}  className="news__card">   
            <div className="news-text">
                <div className="news-hashtag">
                    {props.hashtag}
                </div>
                <div className="news-title">
                    {props.title.toUpperCase()}
                </div>
            </div>
            {newsSidePanel}
        </div>
    )
}