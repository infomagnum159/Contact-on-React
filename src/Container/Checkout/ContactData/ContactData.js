import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import './ContactData.css';
import Spinner from "../../../Components/UI/Spinner/Spinner";
import Button from "../../../Components/UI/Button/Button";
import {useHistory} from "react-router-dom";
import {fetchData} from "../../../store/Actions/MenuAction/menuActions";
import {fullErase} from "../../../store/Actions/CartAction/cartActions";

const ContactData = ({onClose}) => {
    let history = useHistory();
    const dispatch = useDispatch();
    const loading = useSelector(state => state.menuList.loading);
    const orders = useSelector(state => state.cartOrder);

    const [customer, setCustomer] = useState({
        name: '',
        tel: '',
        street: '',
    });

    const onInputChange = e => {
        const {name, value} = e.target;

        setCustomer(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const createOrder = async e => {
        e.preventDefault();
        const order = {...orders};
        for (const key in order) {
            delete order[key]['price'];
        }

        await dispatch(fetchData({customer, order}));
        history.push('/');
        dispatch(fullErase());
        onClose();
    };

    let form = (
        <form onSubmit={createOrder}>
            <input
                className="Input"
                type="text"
                name="name"
                placeholder="Имя"
                value={customer.name}
                onChange={onInputChange}
            />
            <input
                className="Input"
                type="tel"
                name="tel"
                placeholder="Телефон"
                value={customer.email}
                onChange={onInputChange}
            />
            <input
                className="Input"
                type="text"
                name="street"
                placeholder="Адрес"
                value={customer.street}
                onChange={onInputChange}
            />
            <Button type="Success">Продолжить</Button>
        </form>
    );

    if (loading) {
        form = <Spinner/>
    }

    return (
        <div className="ContactData">
            {form}
        </div>
    );
};

export default ContactData;