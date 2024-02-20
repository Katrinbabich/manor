import { Modal, Button, Form, Card, Col, Image, OverlayTrigger, Tooltip} from "react-bootstrap";
import { DEVICE_ROUTE } from "../../utils/consts";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { observer } from "mobx-react-lite";

import {createDevice, deleteOneDevice, fetchOneDevice} from "../../http/deviceAPI";
const DeleteDevice = observer(({ show, onHide }) => {
    const navigate = useNavigate();
    const [id, setId] = useState("");
    const [findDevice, setfindDevice] = useState("");
    const searchDevice = (id) => {
        fetchOneDevice(id).then((data) => setfindDevice(data));
    };
    const deleteDevice = async () => {
        await deleteOneDevice(id);
        alert(`Место было удалено`);
        onHide();
    };
    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Удалить место
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

                </Form>
                    </OverlayTrigger>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>
                    Закрыть
                </Button>
                <Button variant={"outline-success"} onClick={deleteDevice}>
                    Удалить
                </Button>
            </Modal.Footer>
        </Modal>
    );
});

export default DeleteDevice;