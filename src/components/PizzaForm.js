import React from 'react';
import { Link } from 'react-router-dom';

export default function PizzaForm(props) {
    const { values, submit, change, disabled, errors } = props;

    const onSubmit = async (evt) => {
        evt.preventDefault();
        submit();
    };

    const onChange = (evt) => {
        const { name, value, checked, type } = evt.target;
        const correctValue = type === "checkbox" ? checked : value;
        values.total = 0;
        if (values.size === "small") {
            values.total = 5;
        }
        else if (values.size === "medium") {
            values.total = 6;
        }
        else if (values.size === "large") {
            values.total = 7;
        } else {
            values.total = 0;
        }
        if (values.substitute === false) {
            values.total += 1;
        }
        values.total = values.total * values.quantity;
        change(name, correctValue);
    };




    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <img src="/images/pizza.jpg" alt="Pizza" width="400" height="250" />
                </div>
                <div>
                    <h2>Build Your Own Pizza</h2>
                </div>
                <div>
                    <h3>Name for order</h3>
                    <div className="errors">{errors.name}</div>
                    <input onChange={onChange} name="name" type="text" placeholder="Enter name here" />
                </div>
                <div>
                    <h3>Choice of Size</h3>
                    <div className="errors">{errors.size}</div>
                    <select name="size" onChange={onChange}>
                        <option value="">Select</option>
                        <option value="small">Small(+$5)</option>
                        <option value="medium">Medium(+$6)</option>
                        <option value="large">Large(+$7)</option>
                    </select>
                </div>
                <div>
                    <h3>Choice of Sauce</h3>
                    <div className="errors">{errors.sauce}</div>
                    <input onChange={onChange} type="radio" id="originalRed" name="sauce" value="originalRed" />
                    <label>Original Red</label>
                    <input onChange={onChange} type="radio" id="garlicRanch" name="sauce" value="garlicRanch" />
                    <label >Garlic Ranch</label>
                    <input onChange={onChange} type="radio" id="bbqSauce" name="sauce" value="bbqSauce" />
                    <label >BBQ Sauce</label>
                    <input onChange={onChange} type="radio" id="spinachAlfredo" name="sauce" value="spinachAlfredo" />
                    <label >Spinach Alfredo</label>
                </div>
                <div>
                    <h3>Add Toppings</h3>
                    <div className="errors">{errors.toppings}</div>
                    <div>
                        <input onChange={onChange} type="checkbox" id="pepperoni" name="pepperoni" value="pepperoni" checked={values.pepperoni} />
                        <label >Pepperoni</label>

                        <input onChange={onChange} type="checkbox" id="sausage" name="sausage" value="sausage" checked={values.sausage} />
                        <label >Sausage</label>

                        <input onChange={onChange} type="checkbox" id="canadianBacon" name="canadianBacon" value="canadianBacon" checked={values.canadianBacon} />
                        <label >Canadian Bacon</label>

                        <input onChange={onChange} type="checkbox" id="spicyItalianSausage" name="spicyItalianSausage" value="spicyItalianSausage" checked={values.spicyItalianSausage} />
                        <label >Spicy Italian Sausage</label>

                        <input onChange={onChange} type="checkbox" id="grilledChicken" name="grilledChicken" value="grilledChicken" checked={values.grilledChicken} />
                        <label >Grilled Chicken</label>

                        <input onChange={onChange} type="checkbox" id="onions" name="onions" value="onions" checked={values.onions} />
                        <label >Onions</label>

                        <input onChange={onChange} type="checkbox" id="greenPepper" name="greenPepper" value="greenPepper" checked={values.greenPepper} />
                        <label >Green Pepper</label>
                    </div>
                    <div>
                        <input onChange={onChange} type="checkbox" id="dicedTomatos" name="dicedTomatos" value="dicedTomatos" checked={values.dicedTomatos} />
                        <label >Diced Tomatos</label>

                        <input onChange={onChange} type="checkbox" id="blackOlives" name="blackOlives" value="blackOlives" checked={values.blackOlives} />
                        <label >Black Olives</label>

                        <input onChange={onChange} type="checkbox" id="roastedGarlic" name="roastedGarlic" value="roastedGarlic" checked={values.roastedGarlic} />
                        <label >Roasted Garlic</label>

                        <input onChange={onChange} type="checkbox" id="artichokeHearts" name="artichokeHearts" value="artichokeHearts" checked={values.artichokeHearts} />
                        <label >Artichoke Hearts</label>

                        <input onChange={onChange} type="checkbox" id="threeCheese" name="threeCheese" value="threeCheese" checked={values.threeCheese} />
                        <label >Three Cheese</label>

                        <input onChange={onChange} type="checkbox" id="pineapple" name="pineapple" value="pineapple" checked={values.pineapple} />
                        <label >Pineapple</label>

                        <input onChange={onChange} type="checkbox" id="extraCheese" name="extraCheese" value="extraCheese" checked={values.extraCheese} />
                        <label >Extra Cheese</label>
                    </div>
                </div>
                <div>
                    <h3>Choice of Substitute</h3>
                    <div className="errors">{errors.substitute}</div>
                    <input onChange={onChange} type="checkbox" id="glutenFree" name="substitute" value="substitute" />
                    <label >Gluten Free Crust (+ $1.00)</label>
                </div>
                <div>
                    <h3>Special Instructions</h3>
                    <textarea onChange={onChange} name="specialInstructions" id="specialInstructions" cols="30" rows="5" placeholder="Anything else you'd like to add?"></textarea>
                </div>
                <hr />
                <div>
                    <div className="errors">{errors.quantity}</div>
                    <input onChange={onChange} type="number" min="1" max="10" name="quantity" id="quantity" step="1" value={values.quantity} />
                    <Link to="/order">
                        <button disabled={disabled} id="submitBtn" type='submit'>Add to Order ${values.total}</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}