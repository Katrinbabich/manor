import React, { useContext } from 'react';
import './Podval.css';
import { observer } from 'mobx-react-lite';
import {useNavigate} from "react-router-dom";
import {ADMIN_ROUTE, BANK_ROUTE, HISTORY_ROUTE, RASPISANIE_ROUTE, TAXI_ROUTE} from "../utils/consts";

const Podval = observer(() => {
    const navigate = useNavigate()
    return(
        <div className="podval">
            <div className={"kolper"}>
                <div className={"nazv"}>GluManor</div>
            <div className={"god"}>2022-2024</div>
            <div className={"sin"}>Вишневая столица</div>
            </div>
                    <div className={"koldva"}>
                        <ul>
                            <li><a onClick={() => navigate(RASPISANIE_ROUTE)} className={"ashka"}>Расписание автобусов</a></li>
                            <li><a onClick={() => navigate(BANK_ROUTE)} className={"ashka"}>Банкоматы и обмен валют</a></li>

                        </ul>
                    </div>
                    <div className={"koltri"}>
                        <ul>
                            <li><a onClick={() => navigate(TAXI_ROUTE)} className={"ashka"}>Такси</a></li>
                            <li><a onClick={() => navigate(HISTORY_ROUTE)} className={"ashka"}>История Глубокого</a></li>
                        </ul>
                    </div>
            <div className={"kolchet"}>
                <ul>
                    <li><a className={"ashka"} href={"https://www.instagram.com/glybokoenews.gl/"}>insta</a></li>

                    <li><a className={"ashka"} href={"https://vk.com/podslyshanoglubokoe"}>vk</a></li>
                </ul>
            </div>
            </div>
    )
});

export default Podval;

