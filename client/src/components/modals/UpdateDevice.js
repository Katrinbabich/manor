import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import {Modal, Button, Form, Tooltip, OverlayTrigger} from "react-bootstrap";
import { fetchOneDevice, updateDevice} from "../../http/deviceAPI";
import DeviceForm from "../DeviceForm";
import './CreateDevice.css';
import "./UpdateDevice.css"
const UpdateDevice = observer(({ show, onHide }) => {
    const [id, setId] = useState("");
    const [findDevice, setfindDevice] = useState("");
    const [updatedDevice, setUpdatedDevice] = useState({});

    const searchDevice = (id) => {
        fetchOneDevice(id).then((data) => setfindDevice(data));
    };
    console.log(updatedDevice);
    const putDevice = async (device) => {
            console.log(device.file);
            const formData = new FormData()
            formData.append("id", `${device.id}`);
            formData.append("name", device.name);
            formData.append("price", `${device.price}`);
            formData.append("img", device.file);
            formData.append("typeId", device.type.id);
            formData.append("adres", `${device.adres}`);
            formData.append("kolmest", device.kolmest);
            formData.append("kontact", device.kontact);
            formData.append("desc", device.desc);

        formData.append("info", JSON.stringify(device.info));
            await updateDevice(formData);
        alert(`Место было обновлено`);

        onHide();
    };
    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Обновить место
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip id="tooltip-address">ID можно узнать в URL места или в БД</Tooltip>}
                >
                <Form className="d-flex">
                    <Form.Control
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        placeholder={"Введите id места"}
                        type="number"
                        min={1}
                    />
                    <Button className={"poisk11"} variant={"outline-dark"} onClick={() => searchDevice(id)}>
                        Поиск
                    </Button>
                </Form>
                    </OverlayTrigger>
                {findDevice ? (
                    <DeviceForm
                        item={findDevice}
                        updateDevice={(device) => setUpdatedDevice(device)}
                    />
                ) : null}
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>
                    Закрыть
                </Button>
                <Button
                    variant={"outline-success"}
                    onClick={() => putDevice(updatedDevice)}
                >
                    Обновить
                </Button>
            </Modal.Footer>
        </Modal>
    );
});

export default UpdateDevice;