import Identitical from '../components/identitical'
import Exercises from '../components/top_exercises'
import Equipments from '../components/top_equipments'
import Popular from '../components/popular_gym'
import { Container, Row, Col, Image, Stack } from "react-bootstrap";

function Home(){
    return(
      <>
        <div>
        <ul className="nav justify-content-center pb-2 ">
  {/* <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">Active</a>
  </li> */}
  <li className="nav-item">
    <a className="nav-link" href="#">Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Offers</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Locations</a>
  </li>
    {/* <% if(!curUser){ %>
  <li className="nav-item">
    <a className="nav-link" href="/gymnastic/user/signup">Signup</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/gymnastic/user/login">login</a>
  </li>
      <% } %> */}
</ul>
    </div>

    <Identitical/>
    <Exercises/>
    <Equipments/>
    <Popular/>
    
    <Container className="text-center my-5">
      {/* Title */}
      <h2 className="fw-bold">OUR TRUSTED USERS</h2>

      {/* Avatar Stack */}
      <div className="d-flex justify-content-center mt-3">
        <Stack direction="horizontal" gap={-10} className="avatar-stack">
          <Image src="" roundedCircle className="avatar" />
          <Image src="/images/avatar/2.jpg" roundedCircle className="avatar" />
          <Image src="/images/avatar/4.jpg" roundedCircle className="avatar" />
          <Image src="/images/avatar/5.jpg" roundedCircle className="avatar" />
          <span className="avatar-count">+6</span>
        </Stack>
      </div>

      {/* Partnership Stats */}
      <Row className="mt-4">
        <Col>
          <h2 className="fw-bold">Partnership</h2>
          <h2 className="fw-bold">20+</h2>
        </Col>
      </Row>
    </Container>

    </>

    )
}

export default Home