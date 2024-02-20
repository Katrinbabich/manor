import { observer } from "mobx-react-lite";
import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import CreateDevice from "./modals/CreateDevice";
import DeleteDevice from "./modals/DeleteDevice";
import UpdateDevice from "./modals/UpdateDevice";
import "./AdminDevice.css"
import {deleteFromBasket} from "../http/deviceAPI";

const AdminDevice = observer(() => {
    const [createVisible, setCreateVisible] = useState(false);
    const [deleteVisible, setDeleteVisible] = useState(false);
    const [updateVisible, setUpdateVisible] = useState(false);
    return (

        <Card
            className="carddev"
            style={{width: "80%", margin: "auto", padding: 15}}
        >
            <Button
                variant={"outline-light"}
                className="butdev"
                onClick={() => setCreateVisible(true)}
            >
                Добавить место
            </Button>
            <Button
                variant={"outline-light"}
                className="butdev"
                onClick={() => setDeleteVisible(true)}
            >
                Удалить место
            </Button>
            <Button
                onClick={() => setUpdateVisible(true)}
                variant={"outline-light"}
                className="butdev"
            >
                Обновить место
            </Button>

            <CreateDevice
                show={createVisible}
                onHide={() => setCreateVisible(false)}

            />
            <DeleteDevice
                show={deleteVisible}
                onHide={() => setDeleteVisible(false)}
            />
            <UpdateDevice
                show={updateVisible}
                onHide={() => setUpdateVisible(false)}
            />
        </Card>
    );
});
export default AdminDevice;