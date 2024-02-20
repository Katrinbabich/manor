import { Modal, Button, Form, Dropdown } from "react-bootstrap";
import { Context } from "../../index";
import { useState, useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import {fetchTypes, updateType} from "../../http/deviceAPI";
import "./CreateDevice.css"

const UpdateTyp = observer(({ show, onHide }) => {
    const { device } = useContext(Context);
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    useEffect(() => {
        if (show) {
            fetchTypes().then((data) => device.setTypes(data));
        }
    }, [show]);

    const updateOneType = async (id, name) => {
        await updateType({ id, name });
        alert(`Тип был обновлен`);

        onHide();
    };
    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Обновить тип
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
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
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={"Введите новое название типа"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>
                    Закрыть
                </Button>
                <Button
                    variant={"outline-success"}
                    onClick={() => updateOneType(type.id, name)}
                >
                    Обновить
                </Button>
            </Modal.Footer>
        </Modal>
    );
});

export default UpdateTyp;