import { useState } from 'react';

function LightSwitch() {
    const [LightSwitch, setLightSwitch] = useState(false);
    
    return (
        <div>
            <p>{LightSwitch ? "The light switch is ON..." : "The light switch is OFF..."}</p>
            <button onClick={() => setLightSwitch(!LightSwitch)}>Flip Switch</button>
        </div>
    )
}

export default LightSwitch;