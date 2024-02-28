import { useState } from "react";
import "../../Styles/cards.css" 
import {CCard, CCardBody, CCardText} from "@coreui/react"

const Item = ({ title, emoji, darkMode }) => {
    const [copy, setCopy] = useState(false);
    
    const handleCopy = () => {
        setCopy(true);
        navigator.clipboard.writeText(emoji);
        setTimeout(() => setCopy(false), 3000);
    }

    return (
        <article >        
        <CCard className={`card-emoji ${darkMode?"dark-mode":""}`}>
        <CCardBody>
        <p className="emoji-icon" onClick={handleCopy}>{emoji}</p>
          <CCardText className="emoji-text">
            {title}
          </CCardText>
        </CCardBody>
        { copy && <p className="copied">Copied!</p> }
      </CCard>
      </article>
    );
}
 
export default Item;