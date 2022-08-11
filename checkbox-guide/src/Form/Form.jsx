import { useState, useEffect } from "react"
import { Form, Button, Row, Col } from "react-bootstrap"
import { useParams } from 'react-router-dom'

import ProjectCheckbox from "./ProjectCheckbox"


const CreateForm = ({ fireFinalActions }) => {


    return (

        <Form onSubmit={handleSubmit}>
            <Row>
                <Col>
                    <Form.Group className="sm-12 mb-3" controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" value={username} onChange={handleInputChange} name="username" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="sm-12 mb-3" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={email} onChange={handleInputChange} name="email" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className='sm-12 mb-3' controlId='role'>
                        <Form.Label>Type of user</Form.Label>
                        <Form.Select aria-label="Default select example" name='role' onChange={handleInputChange}>
                            <option value={'VOLUNTEER'}>Volunteer</option>
                            <option value={'HOST'}>Host</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group className="mb-3" controlId="bio">
                <Form.Label>Bio</Form.Label>
                <Form.Control type="bio" value={bio} onChange={handleInputChange} name="bio" />
            </Form.Group>
            <Row>
                <Col>
                    <ProjectCheckbox receiveProjects={receiveProjects} projectsChecked={projectsChecked} />

                </Col>
            </Row>
            <Form.Group className='mb-3' controlId='profilePicture'>
                <Form.Label>Profile picture (File)</Form.Label>
                <Form.Control type='file' onChange={handleFileInput} name='profilePicture' />
            </Form.Group>
            <div className="d-grid">
                <Button variant="dark" type="submit">Update user information</Button>
            </div>
        </Form>
    )
}
export default CreateForm