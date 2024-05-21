import React from 'react';
import "./AddInfo.css"

function AddInfo() {


    return (
        <div className="add-info">

            <div className="info-input">
                <p>Назва товару</p>
                <input type="text"/>
            </div>

            <div className="info-input">
                <p>Вибір категорії</p>
                <select>
                <option value="">Виберіть потрібну категорію</option>
                <option value="">Категорія</option>
                <option value="">Категорія</option>
                <option value="">Категорія</option>

                </select>

            </div>

            <div className="info-input">
                <p>Стан товару</p>
                <select>
                    <option value="">Виберіть cтан товару</option>
                    <option value="">Новий</option>
                    <option value="">Вживаний</option>
                </select>

            </div>

            <div className="info-block">
                <div className="info-price">
                    <div className="price-input">
                        <p>Ціна товару</p>
                        <input type="text"/>
                    </div>
                    <p className="price-button">Визначити ціну</p>
                </div>

                <div className="info-amount">
                    <p>Кількість товару</p>
                    <input type="text"/>
                </div>
            </div>

            <div className="info-input">
                <p>Опис</p>
                <textarea name=""></textarea>
            </div>

        </div>
    );
}

export default AddInfo;