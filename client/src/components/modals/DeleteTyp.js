import { Modal, Button, Form, Dropdown } from "react-bootstrap";
import { Context } from "../../index";
import { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import {deleteOneType, fetchTypes} from "../../http/deviceAPI";
import "./CreateDevice.css"

const DeleteTyp = observer(({show, onHide}) => {
    const {device} = useContext(Context);
    useEffect(() => {
        if (show) {
            fetchTypes().then((data) => device.setTypes(data));
        }
    }, [show]);

    const deleteType = () => {
        deleteOneType(device.selectedType.id).then(() => {
            device.setTypes(
                device.types.filter((el) => el.id !== device.selectedType.id)
            );
            device.setSelectedType({});
        });
        alert(`Тип был удален`);
        onHide();
    };




    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Удалить тип
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle className="custom-dropdown-toggle">
                            {device.selectedType.name || "Выберите тип"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="custom-dropdown-menu">
                            {device.types.map((type) => (
                                <Dropdown.Item className="custom-dropdown-item"
                                    onClick={() => device.setSelectedType(type)}
                                    key={type.id}
                                >
                                    {type.name}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>
                    Закрыть
                </Button>
                <Button variant={"outline-success"} onClick={deleteType}>
                    Удалить
                </Button>
            </Modal.Footer>
        </Modal>
    );
});
export default DeleteTyp;