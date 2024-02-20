import { observer } from "mobx-react-lite";
import { useState } from "react";
import "./AdminType.css"
import { Card, Button } from "react-bootstrap";
import CreateType from "./modals/CreateType";
import DeleteTyp from "./modals/DeleteTyp";
import UpdateTyp from "./modals/UpdateTyp";

const AdminType = observer(() => {
    const [createVisible, setCreateVisible] = useState(false);
    const [deleteVisible, setDeleteVisible] = useState(false);
    const [updateVisible, setUpdateVisible] = useState(false);

    return (
        <Card
            className="cardtype"
            style={{ width: "80%", margin: "auto", padding: 15, marginTop: 15 }}
        >
            <Button
                variant={"outline-light"}
                className="buttype"
                onClick={() => setCreateVisible(true)}
            >
                Добавить тип
            </Button>
            <Button
                variant={"outline-light"}
                className="buttype"
                onClick={() => setDeleteVisible(true)}
            >
                Удалить тип
            </Button>
            <Button
                variant={"outline-light"}
                className="buttype"
                onClick={() => setUpdateVisible(true)}
            >
                Обновить тип
            </Button>

            <CreateType show={createVisible} onHide={() => setCreateVisible(false)} />
            <DeleteTyp show={deleteVisible} onHide={() => setDeleteVisible(false)} />
            <UpdateTyp show={updateVisible} onHide={() => setUpdateVisible(false)} />
        </Card>
    );
});

export default AdminType;