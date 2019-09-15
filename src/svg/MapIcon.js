import React from 'react'
import Svg, { G, Path } from 'react-native-svg'

const MapIcon = props => (
    <Svg height={32} width={32} {...props}>
        <G clipRule="evenodd" fill="#333" fillRule="evenodd">
            <Path d="M16.002 17.746c3.309 0 6-2.692 6-6s-2.691-6-6-6-6 2.691-6 6 2.691 6 6 6zm0-11c2.758 0 5 2.242 5 5s-2.242 5-5 5-5-2.242-5-5 2.242-5 5-5z" />
            <Path d="M16 0C9.382 0 4 5.316 4 12.001c0 7 6.001 14.161 10.376 19.194.016.02.718.805 1.586.805h.077c.867 0 1.57-.785 1.586-.805 4.377-5.033 10.377-12.193 10.377-19.194A11.971 11.971 0 0016 0zm.117 29.883c-.021.02-.082.064-.135.098-.01-.027-.084-.086-.129-.133C12.188 25.631 6 18.514 6 12.001 6 6.487 10.487 2 16 2c5.516 0 10.002 4.487 10.002 10.002 0 6.512-6.188 13.629-9.885 17.881z" />
        </G>
    </Svg>
)

export default MapIcon
