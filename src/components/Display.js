import React from 'react'

import { StyledDisplpay } from './styles/StyledDisplay'

const Display = ({ gameOver, text }) => {
    return(
        <StyledDisplpay gameOver={gameOver}>
            {text}
        </StyledDisplpay>
    )
}

export default Display