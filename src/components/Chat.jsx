import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useState } from 'react';


const Chat = () => {

    const [userMessage, setUserMessage] = useState('');
    const [chatMessages, setChatMessages] = useState([]);

    const handleUserMessageChange = (e) => {
        setUserMessage(e.target.value);
    };

    const handleSendMessage = () => {
        if (userMessage.trim() === '') return;

        // Agregar el mensaje del usuario al historial de chat
        setChatMessages([...chatMessages, { text: userMessage, isUser: true }]);

        // Aquí puedes enviar el mensaje a Dialogflow y recibir la respuesta

        // Limpia el campo de entrada de mensajes
        setUserMessage('');
    };
    return (
        <div>
            <Container>
                <Row>
                    <Col md={8}>
                        <div className="chat-container">
                            {chatMessages.map((message, index) => (
                                <div
                                    key={index}
                                    className={`message ${message.isUser ? 'user' : 'bot'}`}
                                >
                                    {message.text}
                                </div>
                            ))}
                        </div>
                    </Col>
                    <Col md={4}>
                        <Form>
                            <Form.Group>
                                <Form.Control
                                    type="text"
                                    placeholder="Escribe tu mensaje..."
                                    value={userMessage}
                                    onChange={handleUserMessageChange}
                                />
                            </Form.Group>
                            <Button
                                variant="primary"
                                onClick={handleSendMessage}
                            >
                                Enviar
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Chat;