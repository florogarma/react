import Container from 'react-bootstrap/Container';

import { NavbarCollapse } from "react-bootstrap"

export const ItemListContainer = (props) => {
    return(
      
        <Container>
            <h1>
                {props.greeting}
            </h1>
        </Container>
  )
}