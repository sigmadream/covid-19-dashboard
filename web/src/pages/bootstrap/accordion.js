import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import { Card, Container, Button } from 'react-bootstrap';

export default function AccordionPage() {
  return (
    <Container className='pt-3'>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>카드 헤더 #1</Accordion.Header>
          <Accordion.Body>
            콘텐츠
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>카드 헤더 #2</Accordion.Header>
          <Accordion.Body>
            콘텐츠
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}
