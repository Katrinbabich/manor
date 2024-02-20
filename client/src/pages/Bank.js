import Podval from "../components/Podval";
import fon_bank from "../assets/bank-fon-krasivo-3.jpg";
import React from "react";
import './Bank.css';
const Bank = () => {
    return (
<div>
            <div style={{ position: 'relative' }}>
                <img className={'fonchikB'} src={fon_bank} alt="Картинка" />
                <div className="centered-textB">БАНКОМАТЫ И ПУНКТЫ ОБМЕНА ВАЛЮТ</div>
        </div>
    <div className={"zagB"}>
        Банкоматы
    </div>
    <table className={"tablo2"}>
        <tbody>
        <tr>
            <td rowSpan="2">Банк</td>
            <td rowSpan="2">Адрес</td>
            <td rowSpan="2">Расположение и режим работы</td>
        </tr>
        <tr>
        </tr>
        <tr>
            <td>Белагропромбанк</td>
            <td>пл. 17 Cентября, 14</td>
            <td>Отделение банка
                Пн-Вс: 00:00-24:00</td>
        </tr>
        <tr>
            <td>Белагропромбанк</td>
            <td>ул. Ленина, 140-Б</td>
            <td>Пн-Вс: 00:00-24:00</td>
        </tr>
        <tr>
            <td>Белагропромбанк</td>
            <td>ул. Московская, 81 </td>
            <td>Административное здание ОАО "Глубокский мясокомбинат"
                Пн-Вс: 00:00-24:00</td>
        </tr>
        <tr>
            <td>Беларусбанк</td>
            <td>ул. Коммунистическая, 8-А </td>
            <td>Отделение банка
                Пн-Вс: 00:00-24:00</td>
        </tr>
        <tr>
            <td>Беларусбанк</td>
            <td>ул. Ленина, 7А</td>
            <td>Магазин "Универмаг"
                Пн-Вс: 09:00-19:00</td>
        </tr>
        <tr>
            <td>Беларусбанк</td>
            <td>ул. Мельничная, 9</td>
            <td>Магазин "Лидер"
                Пн-Вс: 00:00-24:00</td>
        </tr>
        <tr>
            <td>Беларусбанк</td>
            <td>ул. Советская, 240-А</td>
            <td>Детская поликлиника
                Пн-Вс: 00:00-24:00</td>
        </tr>
</tbody>

    </table>
    <iframe className={"kartB"}
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A3cc90e0e59bf47481c171492a6352e73e924dc739a3067d49fb132123fd11877&amp;source=constructor"
        width="1000" height="500" frameBorder="0"></iframe>
    <div className={"zagB"}>
        Пункты обмена валют
    </div>
    <table className={"tablo2"}>
        <tbody>
        <tr>
            <td rowSpan="2">Банк</td>
            <td rowSpan="2">Адрес</td>
            <td rowSpan="2">Режим работы</td>
        </tr>
        <tr>
        </tr>
        <tr>
            <td>Беларусбанк, обменный пункт</td>
            <td>пл. 17 Cентября, 14</td>
            <td>пн,ср,чт,пт 9:30–17:00</td>
        </tr>
        <tr>
            <td>Белагропромбанк</td>
            <td>
                ул. Гагарина, 2А</td>
            <td>
                пн-пт 09:30–15:00</td>
        </tr>
        <tr>
            <td>Беларусбанк, обменный пункт</td>
            <td>
                ул. Ленина, 7А </td>
            <td>ср-пт 09:00–17:30</td>
        </tr>
        <tr>
            <td>Белагропромбанк, обменный пункт</td>
            <td>
                ул. Ленина, 140Б</td>
            <td>
                вт-пт 09:30–18:00</td>
        </tr>
        <tr>
            <td>Беларусбанк, обменный пункт</td>
            <td>
                ул. Ленина, 22</td>
            <td>
                ср-пт 09:00–17:30</td>
        </tr>

        </tbody>

    </table>
    <iframe className={'kartB'}
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A7d42d9b1b84879315e4f203744b27a6e68fc45e24b492598eb833c7e57200f62&amp;source=constructor"
        width="1000" height="500" frameBorder="0"></iframe>

    <Podval/>
        </div>


    );
};
export default Bank;



