import React from 'react';
import Button from "../UI/Button/Button";
import ContactData from "../../Container/ContactData/ContactData";

const OrderInfo = props => {

    const onClickCLose = () => {
        props.onOrder();
    }

    return (
        <>
            <h3>Ваш Заказ</h3>
            <p>Введите Ваши данные</p>

            <ContactData
                onClose={onClickCLose}
            />

            <p><strong>Сумма заказа: {props.price}  KGS</strong></p>
            <Button type="Danger" onClick={props.onCancel}>Отмена</Button>
        </>
    );
};

export default OrderInfo;