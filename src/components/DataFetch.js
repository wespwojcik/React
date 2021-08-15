import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button'

function DataFetch() {
    const [post, setPosts] = useState({})
    const [user, setUsers] = useState({})
    const [Company, setCompany] = useState({})
    const [id, setId] = useState(1)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => {
                console.log(res)
                setUsers(res.data)
            })
            .catch(err =>
                console.log(err)
            )
    }, [id])
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/1`)
            .then(res => {

                setCompany(res.data.company)
            })
    }, [id])
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
    }, [id])

    return (
        <div>
            <Button className="Button" variant="primary" onClick={handleShow}>
                Check out my Modal!
            </Button>
            <Modal className="Modal" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body className="Body">Woohoo, you're reading this text in a modal!
                    <input type="text" value={id} onChange={e => setId(e.target.value)} />
                    {id > 0 && id >= 1 ?
                        <>
                            <h3><b>Title: </b>{post.title}</h3>
                            <div><b>User Name: </b>{user.name}</div>
                            <div><b>Catch Phrase: </b>{Company.catchPhrase}</div>
                            {console.log(Company.catchPhrase)}
                            <div><b>Body:</b> {post.body}</div>
                        </>
                        : <h2>Enter A Number!</h2>
                    }
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
export default DataFetch