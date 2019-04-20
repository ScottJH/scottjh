import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <form action="#" method="post">
                <div className="field-group pt-3 pb-3">
                    <label htmlFor="name">Text Input:</label>
                    <input type="text" name="name" id="name" defaultValue="" tabIndex="1" />
                </div>

                <div className="field-group pt-3 pb-3">
                    <h4>Radio Button Choice</h4>
                    <ul className="input-group">
                        <li>
                            <input type="radio" name="test-radio" id="radio-1" value="1"/>
                            <label htmlFor="radio-1">Item 1</label>
                        </li>
                        <li>
                            <input type="radio" name="test-radio" id="radio-2" value="2"/>
                            <label htmlFor="radio-2">Item 2</label>
                        </li>
                        <li>
                            <input type="radio" name="test-radio" id="radio-3" value="3"/>
                            <label htmlFor="radio-3">Item 3</label>
                        </li>
                    </ul>
                </div>

                <div className="field-group pt-3 pb-3">
                    <label htmlFor="select-choice">Select Dropdown Choice:</label>
                    <select name="select-choice" id="select-choice">
                    <option defaultValue="Choice 1">Choice 1</option>
                    <option defaultValue="Choice 2">Choice 2</option>
                    <option defaultValue="Choice 3">Choice 3</option>
                    </select>
                </div>

                <div className="field-group pt-3 pb-3">
                    <label htmlFor="textarea">Textarea:</label>
                    <textarea rows="8" name="textarea" id="textarea"></textarea>
                </div>

                <div className="field-group pt-3 pb-3">
                    <label>Checkboxes</label>
                    <ul className="input-group">
                        <li>
                            <input type="checkbox" name="test-1" id="checkbox-1" value="1"/>
                            <label htmlFor="checkbox-1">Item 1</label>
                        </li>
                        <li>
                            <input type="checkbox" name="test-2" id="checkbox-2" value="2"/>
                            <label htmlFor="checkbox-2">Item 2</label>
                        </li>
                        <li>
                            <input type="checkbox" name="test-3" id="checkbox-3" value="3"/>
                            <label htmlFor="checkbox-3">Item 3</label>
                        </li>
                    </ul>
                </div>

                <div className="form__footer">
                    <input type="submit" defaultValue="Submit" />
                </div>
            </form>
        )
    }
}

export default Form;
