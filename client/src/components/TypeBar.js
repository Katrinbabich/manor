import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import ListGroup from "react-bootstrap/ListGroup";
import './TypeBar.css';
import {Button} from "react-bootstrap";


const TypeBar = observer(() => {
    const {device} = useContext(Context)

    const refreshPage = ()=>{
        window.location.reload();
    }

    return (
        <ListGroup className="grup">
            <h4 className="tipi">Типы</h4>
            {device.types.map(type =>
                <ListGroup.Item className="list-rectangle"
                    style={{cursor: 'pointer'}}
                    active={type.id === device.selectedType.id}
                    onClick={() => device.setSelectedType(type)}
                    key={type.id}
                >
                    {type.name}
                </ListGroup.Item>
            )}
            <Button className="list-rectangle2" variant="none" onClick={refreshPage}>Отменить</Button>
        </ListGroup>
    );
});

export default TypeBar;


