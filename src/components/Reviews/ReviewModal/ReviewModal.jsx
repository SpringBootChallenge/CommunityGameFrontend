import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Modal from 'react-bootstrap/modal'
import Button from 'react-bootstrap/button'
import Form from 'react-bootstrap/Form'
import RangeSlider from 'react-bootstrap-range-slider';
import reviewService from '../../../services/Review/reviewService'
import {AiFillEdit} from 'react-icons/ai'
import Swal  from 'sweetalert2'; 
import { useAuth } from '../../../hooks/useAuth'
import './ReviewModal.css';

export default function ReviewModal({gameId=null, review=null}) {
    const reviewData = Object.assign({}, review); 
    let buttonId = "updateButton"; 
    let buttonType = <AiFillEdit />; 
    
    if(!review){
        reviewData.score = 0; 
        reviewData.text = "";
        let buttonId = "addButton"; 
        buttonType = 'Add Review' 
    }
    const [show, setShow] = useState(false);
    const [score, setScore] = useState(reviewData.score); 
    const [text, setText] = useState(reviewData.text); 

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const auth = useAuth(); 
    const userId = auth.user.id; 

    const errorMessage = (message) => {
        console.log(message); 
        Swal.fire({
            title: 'Something is wrong!',
            confirmButtonText: 'Ok',
            text: message,
            showCloseButton: true
        })
    }

    return (
        <>
        <Button id={buttonId} variant="primary" onClick={handleShow}>
            {buttonType}
        </Button>

        <Modal id="modal-container" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Edit Review</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Add your review</Form.Label>
                <Form.Control as="textarea" value={text} rows={3} onChange={(event) => setText(event.target.value)} />
                <p>Add your score</p>
                <RangeSlider id='Score'
                    value={score}
                    onChange={e => setScore(e.target.value)}
                    tooltip='on'
                    min={1}
                    max={10}
                />
                </Form.Group>
            </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button type="submit" variant="primary" >
                    Publish
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}
