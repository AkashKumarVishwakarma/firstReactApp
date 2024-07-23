import logo from './logo.svg';
import './App.css';
import {Header} from './Header';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import { Button, Card } from 'react-bootstrap';
import {blog} from './Data/blog'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookReader, faPhone, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function App() {
  // let name="ws cube tech";
  // let arr=[10,20,30,40]
  // let obj={
  //   'name':"ws",
  //   'cName':"MERN",
  //   'desc':'React JS'
  // }
  // let status=true;

  // Header refer ke liye code hai

  let headerInfo={
    email:"ws@gmail.com",
    phone:"7084785196"
  }
  return (
    <div className="main">

     <Header headerInfo={headerInfo}  cname="wscubetech">
        <h2>Wellcome to Header Section</h2>
        <FontAwesomeIcon icon={faWhatsapp} className='text-danger'/>
        <FontAwesomeIcon icon={faPhone} className=''/>
        <FontAwesomeIcon icon={faBookReader} className=''/>
        <FontAwesomeIcon icon={faSearch} className=''/>
     </Header>

     <div className="row">
     <h3>Without Bootstarp :-</h3>
        <MyCard/>
        <MyCard/>
        <MyCard/>
        <MyCard/>
        <MyCard/>
        <MyCard/>
        <MyCard/>
        <MyCard/>
     </div>

     <div className='container'>
        <h3>With Bootstrap :-</h3>
        <h1 className='text-danger'>Wellcome to Home Page</h1>
     </div>

    <Container fluid>
      <h3>with React Bootstrap :-</h3>
        <Row>
          <Col className='col-12 text-center py-4'>
            <h1>Our Courses</h1>
          </Col>
        </Row>
        <Row>
          <Col lg="3" md="6">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="/favicon.ico"/>
                  <Card.Body>
                    <Card.Title>Course 1</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
            </Card>
          </Col>
          <Col lg="3" md="6">
          <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="/favicon.ico" />
                  <Card.Body>
                    <Card.Title>Course 2</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
            </Card>
          </Col>
          <Col lg="3" md="6">
          <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="/favicon.ico"/>
                  <Card.Body>
                    <Card.Title>Course 3</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
            </Card>
          </Col>
          <Col lg="3" md="6">
          <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="/favicon.ico"/>
                  <Card.Body>
                    <Card.Title>Course 4</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
            </Card>
          </Col>
        </Row>
    </Container>

    <Container fluid>
      <h1>Dynamic Page</h1>
      <Row>
      {blog.map((v,i)=>{
        return(
          <ProductItems pitems={v} key={i}/>

        )
      })}
          
      </Row>
    </Container>

     <Footer/>

      
       {/* <h1>{name}</h1>
      {arr.map((v)=>{
        return(
          <div>{v}</div>
        )
      })}
      <div>
        {obj.cName}
      </div>

      {obj.name}

      <div>
      {10+20}
      </div> 
      
      {(status) ? <h1 style={{color:"red",backgroundColor:"yellow"}}>Wellcome to Ws</h1> : "false"} 
      */}
      


    </div>
  );
}

export default App;



function MyCard(){
  return(
    <div className='cardItems'>Card Div</div>
  )
}


function ProductItems({pitems}){
  return(
    <div className="col-lg-3 mb-4">
          <Card>
                  <Card.Body>
                    <Card.Title>{pitems.title}</Card.Title>
                    <Card.Text>
                      {pitems.body}
                    </Card.Text>
                    <Button variant="primary">{pitems.id}</Button>
                  </Card.Body>
            </Card>
    </div>
  )
}
