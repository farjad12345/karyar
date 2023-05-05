import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ButtonMe from "../ButtonMe/ButtonMe"
import "./Menu.css"
function Menu() {
    return (
        <Navbar bg="white" expand="lg" >
            <Container>
                <Navbar.Brand href="#home"> <img alt='logo' className='logo' src={process.env.PUBLIC_URL + '/images/logo.png'} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto"  >
                        <Nav.Link href="#home">خانه</Nav.Link>
                        <Nav.Link href="#link">دوره‌های آموزشی</Nav.Link>
                        <Nav.Link href="#link">فارغ‌التحصیلان</Nav.Link>
                        <Nav.Link href="#link">همکاری داوطلبانه</Nav.Link>
                        <Nav.Link href="#link">استودیو کاریار</Nav.Link>
                        <Nav.Link href="#link">وبلاگ</Nav.Link>
                        <NavDropdown title="درباره" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link">تماس</Nav.Link>
                    </Nav>
                    <ButtonMe text={
                       " ورود به سامانه آموزشی  "
                    }
                        className={"log-in"}
                    link={"link"}/>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;