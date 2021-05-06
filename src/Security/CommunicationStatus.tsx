import * as React from 'react';
import './Status.css';

const CommunicationStatus: React.FC <{status:any, passStyle:any}> = (props) => {
    const containerContent = props.status;
    return(
        <div className={"containerie " + props.passStyle} >
            {containerContent}
        </div>
    );
};

export default CommunicationStatus;
