import React, {useContext, useEffect} from 'react';
import {getBasket} from '../http/deviceAPI';
import {Context} from "../index";
import { observer } from 'mobx-react-lite';
import {Button, Card, Container} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import './Basket.css';
import { useNavigate } from "react-router-dom"
import { deleteFromBasket} from '../http/deviceAPI';
    const Basket = observer(() => {
        const {device} = useContext(Context)
        const navigate = useNavigate()

        useEffect(() => {
            getBasket().then(data => device.setBaskets(data))
        }, [])

        const refreshPage = ()=>{
            window.location.reload();
        }
        const _delete = (id) => {
            deleteFromBasket(id).then(response => alert(`Место было удалено из вашего Избранного`)).then(response => refreshPage())

        }
    return (

        <Container className="d-flex flex-sm-column justify-content-center align-items-center mt-3">
            <h1 className="nadp">Избранное</h1>
            {device.basket.map(product =>
                <Card className="izb" key={product.device.id} >
                    <Row className="d-flex w-100">
                        <Col>
                            <div className="d-flex flex-row align-items-center">
                                <img className="karizb" src={process.env.REACT_APP_API_URL + product.device.img} width={250}/>
                                <h2 className='namem'>{product.device.name}</h2>
                            </div>
                        </Col>
                        <Col>
                            <div className="d-flex h-100 flex-row justify-content-end align-items-center">
                                <h3 className="nom">{product.device.kontact} </h3>
                                <Button className="udal" onClick={() => _delete(product.id)}>Удалить </Button>
                            </div>
                        </Col>
                    </Row>
                </Card>
            )}
        </Container>

    );
    })
        export default Basket;