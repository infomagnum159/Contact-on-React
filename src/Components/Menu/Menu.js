import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import './Menu.css';
import {fetchMenu} from "../../store/Actions/MenuAction/menuActions";
import Spinner from "../UI/Spinner/Spinner";
import {increase} from "../../store/Actions/CartAction/cartActions";

const Menu = () => {
    const dispatch = useDispatch();
    const menu = useSelector(state => state.menuList.menu);
    const loading = useSelector(state => state.menuList.loading)

    useEffect(() => {
        dispatch(fetchMenu());
    }, [dispatch]);

    const onButtonHandler = (key, price) => {
        dispatch(increase({key, price}));
    };

    let components = (
        <fieldset>
            <legend>MENU</legend>
            <ul>
                {menu.map(item => (
                    <li
                        key={item.id}
                        className="List"
                    >
                        <p className="Img"><img src={item.url} alt="menu" width="150"/></p>
                        <div className="ListInner">
                            <p>{item.name}</p>
                            <p>KGS {item.price}</p>
                        </div>
                        <button
                            type="button"
                            className="BtnAdd"
                            onClick={() => onButtonHandler(item.name, item.price)}
                        >
                            Add to Cart</button>
                    </li>
                ))}
            </ul>
        </fieldset>
    );

    if (loading) {
        components = (
            <Spinner/>
        )
    }

    return (
        <div className="Menu">
            {components}
        </div>
    )
};

export default Menu;