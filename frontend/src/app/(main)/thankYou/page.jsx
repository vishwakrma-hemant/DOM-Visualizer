import { Container,Title,Box,Text } from '@mantine/core'
import React from 'react'

const ThankYou = () => {
  return (
        <Container pt={'25vh'} align={'center'}>
            <Title>Thank you!</Title>
            <Box>
                <Text>
                    You have been successfully submit your page.
                </Text>
            </Box>
        </Container>
  )
}

export default ThankYou;