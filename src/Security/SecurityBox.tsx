import * as React from 'react';
import CommunicationStatus from './CommunicationStatus';
import ContainerStatus from './ContainerStatus';

const SecurityBox: React.FC<{jdata:any}> = (props) => {
    let content;
    if(props.jdata[0] ==="warn")
        content = "warning - Attack detected on " + props.jdata[1] + " packets";
    else if(props.jdata[0]==="error")
        content = "Error - Container comprimised"
    else content = "No attacks detected - all clear"
    
    return(
        <div>
            
            <CommunicationStatus status={content} passStyle={props.jdata}/>
            <ContainerStatus status={content} passStyle={props.jdata[0]}/>
        </div>
    );
};

export default SecurityBox;
