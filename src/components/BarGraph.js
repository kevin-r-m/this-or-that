import React, { useRef } from 'react';
import { useEffect } from 'react/cjs/react.development';
import styles from '../styles/BarGraph.module.scss'

function BarGraph({name, image, votes}) {

    const graphRef = useRef()

    useEffect(() => {
        function convertVotes(){
            const votePixels = votes;
            graphRef.current.setAttribute('style', `width: ${votePixels}px`)
        }
        convertVotes();
    }, [votes])

    return (
        <div className={styles.graphContainer}>
            <img src={image} alt={name} />
            <div className={styles.graph} ref={graphRef}></div>
        </div>
    );
}

export default BarGraph;