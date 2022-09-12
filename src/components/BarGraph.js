import React, { useRef } from 'react';
import { useEffect } from 'react/cjs/react.development';
import styles from '../styles/BarGraph.module.scss'

function BarGraph({name, image, votes, lead}) {

    const graphRef = useRef()

    useEffect(() => {
        function convertVotes(){
            const votePixels = votes;
            graphRef.current.style.width=`${votePixels}px`
        }
        
        if(lead){
            graphRef.current.style.backgroundColor="#409d22"
        }
        convertVotes();
    }, [votes, lead])

    return (
        <div className={styles.graphContainer}>
            <img src={image} alt={name} />
            <div className={styles.graph} ref={graphRef}></div>
        </div>
    );
}

export default BarGraph;