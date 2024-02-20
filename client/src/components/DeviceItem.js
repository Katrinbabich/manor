import React from 'react';
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./DeviceItem.css"
import {DEVICE_ROUTE} from "../utils/consts";
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPeopleGroup, faTag} from "@fortawesome/free-solid-svg-icons";


const DeviceItem = ({device}) => {
    const navigate = useNavigate()

    return (
        <Col md={7} className={"mt-5"} onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
            <div className="post">
                <div className="naved">
                    <Image className="uvphoto" width={400} height={260} src={process.env.REACT_APP_API_URL+device.img}/>
                    <div className='qwerty1234'>{device.name}</div>

                    <div className="oil">
                        <div className='qwerty123'>
                            <h4 className={"zxc"}><FontAwesomeIcon icon={faPeopleGroup} /></h4>
                            {device.kolmest}
                        </div>

                        <div className='qwerty123'>
                            <h4 className={"zxc"}><FontAwesomeIcon icon={faTag} />
                            </h4>
                            {device.price}</div>
                    </div>

                    <div className='descv'>
                        {device.desc}</div>
                </div>


            </div>
        </Col>
    );
};
export default DeviceItem;


