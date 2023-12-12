import React from 'react';
import styles from './button.module.scss';
import classnames from 'classnames';

function Button({onClick, children, type, ...props}) {
    return (
        <button className={classnames(styles.button, styles[type])} onClick={onClick} {...props}>   
            {children}
        </button>
    );
}

export default Button;