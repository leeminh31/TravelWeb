import React from 'react'
import './SelectsStyles.css'

import BoraBora from '../../assets/images/borabora.jpg'
import BoraBora2 from '../../assets/images/borabora2.jpg'
import Maldives from '../../assets/images/maldives.jpg'
import Maldives2 from '../../assets/images/maldives2.jpg'
import Maldives3 from '../../assets/images/maldives3.jpg'
import KeyWest from '../../assets/images/keywest.jpg'

import SelectsImg from '../SelectsImg/SelectsImg'


function Selects() {
    return (
        <div name='views' className='selects'>
            <div className='container'>
                <SelectsImg bgImg={BoraBora} text='Bora Bora' />
                <SelectsImg bgImg={BoraBora2} text='Emerald Bay' />
                <SelectsImg bgImg={Maldives} text='Maldives' />
                <SelectsImg bgImg={Maldives2} text='Grenada' />
                <SelectsImg bgImg={Maldives3} text='Barbados' />
                <SelectsImg bgImg={KeyWest} text='Key West' />
            </div>

        </div>
    )
}

export default Selects
