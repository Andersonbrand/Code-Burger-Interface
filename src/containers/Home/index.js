import React from 'react'

import { CategoryCarousel, OffersCarousel } from '../../components'

import HomeLogo from '../../assets/burger -logo.svg'
import { Container, HomeImg } from './styles'

export function Home() {
    return (
        <Container>
            <HomeImg src={HomeLogo} alt='logo da home' />
            <CategoryCarousel />
            <OffersCarousel />
        </Container>
    )
}