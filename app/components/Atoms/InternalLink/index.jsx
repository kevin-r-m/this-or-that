import React from 'react';
import Link from 'next/link';
import styles from './internal-link.module.scss';

const InternalLink = ({ href, value, ...props }) => {
    return (
        <Link className={styles.internalLink} href={href} {...props}>{value}</Link>
    );
};

export default InternalLink;
