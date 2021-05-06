import * as React from 'react';
import CommunicationStatus from './CommunicationStatus';
import ContainerStatus from './ContainerStatus';

const SecurityBox: React.FC<{jdata:any}> = (props) => {
    let content, content2;
    if(props.jdata[0] ==="warn") {
        content = "warning - Attack detected on " + props.jdata[1] + "/303 packets";
        content2 = "Container Shut Down";
    } else if (props.jdata[0]==="error") {
        content = "Error - Container Comprimised";
        content2 = "Compromised";
    } else {
        content = "No Attacks Detected"
        content2 = "All Containers Operational";
    }
    
    return(
        <div>
            
            <CommunicationStatus status={content2} passStyle={props.jdata[0]}/>
            <ContainerStatus status={content} passStyle={props.jdata[0]}/>
        </div>
    );
};

export default SecurityBox;
