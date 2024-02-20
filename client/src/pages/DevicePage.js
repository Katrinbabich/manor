import React, {useEffect, useState} from 'react';
import './DevicePage.css';
import {Container, Form} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import {Button} from "react-bootstrap";
import {useParams} from 'react-router-dom'
import {fetchOneDevice} from "../http/deviceAPI";
import {addToBasket} from "../http/deviceAPI";
import {observer} from "mobx-react-lite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPeopleGroup, faTag} from "@fortawesome/free-solid-svg-icons";
import Podval from "../components/Podval";


const DevicePage = observer(() => {

    //const {user} = useContext(Context)
    const [device, setDevice] = useState({info:[]})
    const {id} = useParams()
    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])


    const add = () => {
        const formData = new FormData()
        formData.append('deviceId', id)
        addToBasket(formData).then(response => alert(`Место ` + device.name + ` было добавлен в ваше Избранное!`))
    }

    return (
        <div>
        <Container className={"mt-2 mb-5"}>

                <Col>
                    <Form className="d-flex flex-column m-2 ">
                    </Form>
                    <div>
                    {device.img ? (
                    <Image className="kartinka" width={630} height={430} src={process.env.REACT_APP_API_URL+device.img}/>
                    ) : null}
                        </div>

                    <div className="vivod">
                        <h2 className="opis1">{device.name}</h2>

                        <div className='qwerty123'>
                            <h4 className={"ghj"}><FontAwesomeIcon icon={faTag} />
                            </h4>
                            {device.price}</div>
                        <div className='qwerty123'>
                            <h4 className={"ghj1"}><FontAwesomeIcon icon={faPeopleGroup} /></h4>
                            {device.kolmest}
                        </div>
                        <Button className="dobvkorz" variant={"outline-light"}onClick={add}>Добавить в избранное</Button>
                    </div>
                    <h4 className="raspolo">Расположение</h4>
                    <iframe className="karta" src={device.adres} width="650"
                            height="250"></iframe>
                </Col>

            <Row className="desc" >
                <h2 className="nazvopis" >Описание</h2>
                {device.info.map((info, index) =>
                    <Row className="dfg" key={info.id}  >
                        <div className="titlee">{info.title}</div>
                        {info.description}
                    </Row>
                )}

            </Row><br/>
<div>

</div>
        </Container>
    <Podval/>
        </div>
    );
});
export default DevicePage;
