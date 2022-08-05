import React from 'react';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import { Button } from 'devextreme-react/button';
import notify from 'devextreme/ui/notify';
import styles from './index.less';

export default ({ title }: { title: string }) => {

    function showMessage() {
        notify("The button was clicked");
    }

    return (
        <div className={styles.ButtonGroup}>
            <Button
                text="Click me!"
                onClick={showMessage}
                stylingMode="outlined"
                type="success"
                icon="comment"
            />
            <Button
                text="Click me!"
                onClick={showMessage}
                stylingMode="outlined"
                type="danger"
                icon="comment"
            />
            <Button
                text="Click me!"
                onClick={showMessage}
                stylingMode="outlined"
                type="default"
                icon="comment"
            />
            <Button
                text="Click me!"
                onClick={showMessage}
                stylingMode="outlined"
                type="normal"
                icon="comment"
            />
        </div>

    )
};