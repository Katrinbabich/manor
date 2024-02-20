import React, {useContext, useEffect} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TypeBar from "../components/TypeBar";
import DeviceList from "../components/DeviceList";
import {Button,  Container} from "react-bootstrap";
import './Shop.css';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchTypes, fetchDevices} from "../http/deviceAPI";
import Pages from "../components/Pages";
import Carousel from "react-bootstrap/Carousel";
import image from '../assets/image1.jpg';
import lake from '../assets/qrieeny3u0cx7tgs353kk781cz88vul8.jpg';
import image3 from '../assets/img.png';
import kriv from '../assets/кривоеy.jpg';
import setov from '../assets/сетовское.jpg';

import Podval from "../components/Podval";
const Shop = observer(() => {
    const {device} = useContext(Context)


    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchDevices(null, 1, 3).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
            })
    },[])

    useEffect(() => {
        fetchDevices(
            device.selectedType.id,
            device.page,
            5,
        ).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [
        device.page, device.selectedType,
       ])



    return (
        <div id="element"className='bib1'>
            <Container className="onas1">
                <h1 className="glumanor">GluManor</h1>
                <h3 className="oglumanor">места отдыха Глубоксих краев</h3>
                <Carousel className="carus">
                    <Carousel.Item>
                        <img
                            className="carus"

                            src={image}
                            alt={"forest"}
                        />
                        <Carousel.Caption>
                            <h3>Озера Ивесь и Шо</h3>
                            <p>По территории Глубокского района протекает река Огурневка, а также ее притоки. К числу крупнейших озер относятся Шо, Долгое и др. Значительная часть территории покрыта болотами, среди которых самым большим по площади является Журавлевское.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="carus"
                            src={image3}
                            alt={"forest"}
                        />
                        <Carousel.Caption>
                            <h3>Озеро Долгое</h3>
                            <p>Самый глубокий водоем Беларуси, а еще за высокую прозрачность воды называют Белорусским Байкалом (даже форма у обоих водоемов похожа). </p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="carus"
                            src={kriv}
                            alt={"forest"}
                        />
                        <Carousel.Caption>
                            <h3>Озеро Кривое</h3>
                            <p>Этот водоем распложен в 2 км юго-восточнее Глубокого и относится к бассейну реки Березовка, протекающей через него. Площадь водного зеркала составляет 0,05 км2. </p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="carus"
                            src={setov}
                            alt={"forest"}
                        />
                        <Carousel.Caption>
                            <h3>Озеро Сетовское</h3>
                            <p>Этот водоем расположен в 11 км севернее Глубокого и относится к бассейну реки Добрыловка. Ближайшим населенным пунктом является д. Воробьи, которая примыкает к его западному берегу. Площадь водного зеркала составляет 0,49 км2, а максимальная глубина – 19,8 м.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="carus"
                            src={lake}
                            alt={"forest"}
                        />
                        <Carousel.Caption>
                            <h3>Остров желаний</h3>
                            <p>Посетить его можно на необычном кораблике, который отправляется от причала агроусадьбы «Заповедный остров».</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
        <div/>


                <div className="buttons">
                <Button className="but45" variant={"none"}>
                    <a href="#row">Каталог</a>
                </Button>
                </div>

            </Container>
            <Container >
                <Row className="" id="row">
                    <Col md={2}>
                        <TypeBar/>
                    </Col>
                    <Col md={9}>

                        <DeviceList/>
                        <Pages/>
                    </Col>
                </Row>

            </Container>
        <Podval/>
        </div>
    );
});
export default Shop;