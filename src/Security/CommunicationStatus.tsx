import * as React from 'react';
import './Status.css';

const CommunicationStatus: React.FC <{status:any, passStyle:any}> = (props) => {
    let containerState, containerContent="All containers operational";
    
    if(props.passStyle==="error"){
        containerState ="error";
        containerContent = "Containers Comprimised, shutting down";
}else containerState = "clear";
    return(
        <div className={"containerie " +  containerState}>
            {containerContent}
        </div>
    );
};

export default CommunicationStatus;
