import * as React from 'react';
import CommunicationStatus from './CommunicationStatus';
import ContainerStatus from './ContainerStatus';

const SecurityBox: React.FC = () => {

    return(
        <div>
            
            <CommunicationStatus/>
            <ContainerStatus/>
        </div>
    );
};

export default SecurityBox;
