import React from 'react';
import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'
const QZone = () => {
    return (
        <div className='bg-secondary text-center my-4 py-4'>
            <h4>Q-Zone</h4>
            <div>
                <img src={qzone1}></img>
                <img src={qzone2}></img>
                <img src={qzone3}></img>
            </div>
        </div>
    );
};

export default QZone;