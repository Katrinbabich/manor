import React, { useContext, useEffect, useState } from 'react';
import { Button, Form, FormControl, Modal,OverlayTrigger, Tooltip  } from 'react-bootstrap';
import { Context } from '../../index';
import { Dropdown } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { fetchTypes, createDevice } from '../../http/deviceAPI';
import { observer } from 'mobx-react-lite';
import './CreateDevice.css';

const CreateDevice = observer(({ show, onHide }) => {
    const { device } = useContext(Context);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(null);
    const [file, setFile] = useState(null);
    const [info, setInfo] = useState([]);
    const [kolmest, setKolmest] = useState(null);
    const [kontact, setKontact] = useState(null);
    const [adres, setAdres] = useState('');
    const [desc, setDesc] = useState(null);
    const [isAddressExpanded, setIsAddressExpanded] = useState(false);
    const [isDescExpanded, setIsDescExpanded] = useState(false);

    useEffect(() => {
        fetchTypes().then((data) => device.setTypes(data));
    }, []);

    const addInfo = () => {
        setInfo([...info, { title: '', description: '', number: Date.now() }]);
    };

    const removeInfo = (number) => {
        setInfo(info.filter((i) => i.number !== number));
    };

    const changeInfo = (key, value, number) => {
        setInfo(info.map((i) => (i.number === number ? { ...i, [key]: value } : i)));
    };

    const selectFile = (e) => {
        setFile(e.target.files[0]);
    };

    const toggleAddressExpansion = () => {
        setIsAddressExpanded(!isAddressExpanded);
    };

    const toggleDescExpansion = () => {
        setIsDescExpanded(!isDescExpanded);
    };

    const addDevice = () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('kolmest', `${kolmest}`);
        formData.append('kontact', `${kontact}`);
        formData.append('price', `${price}`);
        formData.append('img', file);
        formData.append('typeId', device.selectedType.id);
        formData.append('info', JSON.stringify(info));
        formData.append('adres', `${adres}`);
        formData.append('desc', `${desc}`);

        createDevice(formData)
            .then((response) => alert(`Место было добавлено`))
            .then((data) => onHide());
    };

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить место
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown>
                        <Dropdown.Toggle className="custom-dropdown-toggle">{device.selectedType.name || "Выберите тип"}</Dropdown.Toggle>
                        <Dropdown.Menu className="custom-dropdown-menu">
                            {device.types.map(type =>
                                <Dropdown.Item
                                    onClick={() => device.setSelectedType(type)}
                                    key={type.id}
                                    className="custom-dropdown-item"
                                >
                                    {type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <FormControl
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Введите название места"
                        maxLength="50"
                    />
                    <FormControl
                        type="number"
                        value={kolmest}
                        onChange={(e) => {
                            const inputValue = e.target.value.trim();  // Удаляем пробелы
                            if (inputValue === '' || (!isNaN(inputValue) && parseInt(inputValue, 10) >= 0)) {
                                setKolmest(inputValue === '' ? '' : parseInt(inputValue, 10));
                            } else {
                                alert('Пожалуйста, введите положительное число.');
                            }
                        }}
                        className="mt-3"
                        placeholder="Введите количество мест"
                        maxLength="10"
                    />
                    <FormControl
                        value={kontact}
                        onChange={(e) => setKontact(e.target.value)}
                        className="mt-3"
                        placeholder="Введите контакт связи"
                        maxLength="15"
                    />
                    <OverlayTrigger
                        placement="right"
                        overlay={<Tooltip id="tooltip-address">Пример: от 100р за дом или от 20р на человека</Tooltip>}
                    >
                    <FormControl
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="mt-3"
                        placeholder="Введите стоимость места"
                        maxLength="20"
                    />
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="right"
                        overlay={<Tooltip id="tooltip-address">Пример: https://www.google.com/maps/embed?p!2sby"
                                width="600" height="450" style="border:0;" allowFullScreen="" loading="lazy" ></Tooltip>}
                    >
                        <FormControl
                            as="textarea"
                            rows={isAddressExpanded ? 4 : 1}
                            value={adres}
                            onChange={(e) => setAdres(e.target.value)}
                            onClick={toggleAddressExpansion}
                            className={`mt-3 ${isAddressExpanded ? 'expanded' : ''}`}
                            placeholder="Введите адрес места"
                        />

                    </OverlayTrigger>
                    <FormControl
                        className={`mt-3 ${isDescExpanded ? 'expanded' : ''}`}
                        placeholder="Выберите изображение места"
                        type="file"
                        onChange={selectFile}
                    />
                    <hr />
                    <FormControl
                        as="textarea"
                        rows={isDescExpanded ? 4 : 1}
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        onClick={toggleDescExpansion}
                        className={`mb-3 ${isDescExpanded ? 'expanded' : ''}`}
                        placeholder="Введите описание места"
                        maxLength="200"
                    />
                    <Button
                        variant="outline-dark"
                        onClick={addInfo}
                    >
                        Добавить новое описание
                    </Button>
                    {info.map(i =>
                        <Row className="mt-4" key={i.number} >
                            <Col md={4}>
                                <FormControl
                                    value={i.title}
                                    onChange={(e)=> changeInfo('title',e.target.value, i.number )}
                                    placeholder="Название"
                                    className="mb-3"
                                    as="textarea"
                                />
                            </Col>
                            <Col md={4}>
                                <FormControl
                                    value={i.description}
                                    onChange={(e)=> changeInfo('description',e.target.value, i.number)}
                                    placeholder="Описание"
                                    className="mb-3"
                                    as="textarea"
                                />
                            </Col>
                            <Col md={4}>
                                <Button
                                    onClick={() => removeInfo(i.number)}
                                    variant="outline-danger"
                                >
                                    Удалить
                                </Button>
                            </Col>
                        </Row>
                    )}

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addDevice}>Добавить</Button>


            </Modal.Footer>
        </Modal>
    );
});

export default CreateDevice;