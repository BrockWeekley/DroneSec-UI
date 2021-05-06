import * as React from 'react';
import CommunicationStatus from './CommunicationStatus';
import ContainerStatus from './ContainerStatus';

const SecurityBox: React.FC<{jdata:any}> = (props) => {
    let content;
    if(props.jdata==="warn")
        content = "warning - Attack detected";
    else if(props.jdata==="error")
        content = "Error - Container comprimised"
    else content = "No attacks detected - all clear"
    
    return(
        <div>
            
            <CommunicationStatus status={content} passStyle={props.jdata}/>
            <ContainerStatus status={content} passStyle={props.jdata}/>
        </div>
    );
};

export default SecurityBox;
