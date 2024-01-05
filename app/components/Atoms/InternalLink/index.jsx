import React from 'react';
import Link from 'next/link';
import styles from './internal-link.module.scss';
import classnames from 'classnames';

const InternalLink = ({ href, value, arrowLeft, ...props }) => {
    return (
        <Link className={classnames(styles.internalLink, arrowLeft ? styles.arrowLeft : null)} href={href} {...props}>{value}</Link>
    );
};

export default InternalLink;
