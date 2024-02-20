import React, {useContext, useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import {fetchTypes} from "../http/deviceAPI";
import {Context} from "../index";
import {Button, Form, Dropdown, Row, Col, Card, Image, FormControl} from "react-bootstrap";
import "./DeviceForm.css";


const DeviceForm = observer(({ item, updateDevice }) => {
    const { device } = useContext(Context);
    const [name, setName] = useState(item.name);
    const [price, setPrice] = useState(item.price);
    const [file, setFile] = useState(null);
    const [info, setInfo] = useState(item.info);
    const [kontact, setKontact] = useState(item.kontact);
    const [adres, setAdres] = useState(item.adres);
    const [kolmest, setKolmest] = useState(item.kolmest);
    const [desc, setDesc] = useState(item.desc);



    const [type, setType] = useState(
        device.types.find((el) => el.id === item.typeId)
    );
    useEffect(() => {
        fetchTypes().then((data) => device.setTypes(data));
    }, []);
    useEffect(() => {
        updateDevice({ name, price, kontact, kolmest, adres, file, info,desc,  type, id: item.id });
    }, [name, file, info, type, kontact, kolmest, adres, desc]);
    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now(), create: true },
        ]);
    };
    const removeInfo = (id) => {
        setInfo(info.filter((i) => i.id !== id));
    };
    const changeInfo = (key, value, id) => {
        setInfo(info.map((i) => (i.id === id ? { ...i, [key]: value } : i)));
    };
    const selectFile = (e) => {
        setFile(e.target.files[0]);
    };
    return (
        <Card key={item.id}>
            <Form>
                <Image style={{ width: 150 }} src={process.env.REACT_APP_API_URL + item.img}/>
                <FormControl
                    type="file"
                    onChange={selectFile}
                    className="mt-2 mb-2"
                    placeholder="Выберите изображение места"
                />

                <Dropdown className="mt-2 mb-2">
                    <Dropdown.Toggle className="custom-dropdown-toggle">{type.name || "Выберите тип"}</Dropdown.Toggle>
                    <Dropdown.Menu className="custom-dropdown-menu">
                        {device.types.map((type) => (
                            <Dropdown.Item className="custom-dropdown-item" onClick={() => setType(type)} key={type.id}>
                                {type.name}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>

                <Form.Control
                    className="mt-2 mb-2"
                    value={name}
                    maxlength="50"
                    onChange={(e) => setName(e.target.value)}
                />
                <Form.Control
                    className="mt-2 mb-2"
                    value={price}
                    maxlength="20"

                    onChange={(e) => setPrice(e.target.value)}
                />
                <FormControl
                    value={kolmest}
                    className="mt-2 mb-2"
                    maxlength="20"

                    onChange={(e) => setKolmest(e.target.value)}

                />
                <FormControl
                    className="mt-2 mb-2"
                    value={kontact}
                    maxlength="20"

                    onChange={(e) => setKontact(e.target.value)}
                />
                <FormControl
                    as="textarea"
                    value={adres}
                    onChange={(e) => setAdres(e.target.value)}
                    className="mt-2 mb-2"

                />

                <FormControl
                    as="textarea"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    className="mt-2 mb-2"
                    maxLength="200"

                />

                <Button variant={"outline-dark"} onClick={addInfo}>
                    Обновление описания
                </Button>
                {info.map((i) => (
                    <Row key={i.id} className="mt-2 mb-2">
                        <Col md={4}>
                            <Form.Control
                                value={i.title}
                                onChange={(e) => changeInfo("title", e.target.value, i.id)}
                                placeholder={"Введите название"}
                                as="textarea"
                            />
                        </Col>
                        <Col md={4}>
                            <Form.Control
                                value={i.description}
                                onChange={(e) =>
                                    changeInfo("description", e.target.value, i.id)
                                }
                                placeholder={"Введите описание"}
                                as="textarea"
                            />
                        </Col>
                        <Col variant={"outline-danger"} md={4}>
                            <Button variant={"outline-danger"} onClick={() => removeInfo(i.id)}>Удалить</Button>
                        </Col>
                    </Row>
                ))}
            </Form>
        </Card>
    );
});
export default DeviceForm;