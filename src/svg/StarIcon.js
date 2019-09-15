import React from 'react'
import Svg, { Path } from 'react-native-svg'

const StarIcon = props => (
    <Svg width={20} height={20} viewBox="0 0 51 48" {...props}>
        <Path
            fill="#f4511e"
            stroke="#f4511e"
            d="M25 1l6 17h18L35 29l5 17-15-10-15 10 5-17L1 18h18z"
        />
    </Svg>
)

export default StarIcon
