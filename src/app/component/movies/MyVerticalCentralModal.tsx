import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { ARRAY_FILMS } from '../../mocks/films-mock';

export const MyVerticallyCenteredModal =(props: any)=>{

    const idMovie = Number(props.obj.idFilms);
    console.log(idMovie)
    const myMovie = ARRAY_FILMS.find((theMovie)=>{
        return theMovie.idFilms === idMovie
    })
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {myMovie?.nameFilms}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='d-flex justify-content-center'>
        <Card style={{ width: '20rem' }}>
      <img src={myMovie?.imageFilms} alt="" className='center' />
      <Card.Body>

      </Card.Body>
    </Card>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
