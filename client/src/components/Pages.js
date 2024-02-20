 import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Button, Pagination} from "react-bootstrap";
import './Pages.css';


const Pages = observer(() => {
    const {device} = useContext(Context)
    const pageCount = Math.ceil(device.totalCount / device.limit)
    const pages = []

    for(let i = 0; i<pageCount; i++){
        pages.push(i+1)
    }
    return (

            <Pagination  className="pag1">
            {pages.map(page =>
                <Pagination.Item className="pag"
                    key={page}
                    active={device.page === page}
                    onClick={() => device.setPage(page)}
                    cursor={'pointer'}
                >
                    {page}
                </Pagination.Item>
            )}
        </Pagination>


);
});
export default Pages;