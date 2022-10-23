import React, { useState, useRef } from 'react';
import { useEffect } from 'react/cjs/react.development';
import classNames from 'classnames/bind';
import styles from '../styles/BarGraph.module.scss'

function BarGraph({name, image, votes, lead}) {

    const [showGraphData, setShowGraphData] = useState(false);

    const cx = classNames.bind(styles);

    const graphDataClass = cx({
        dataToggle: true,
        active: showGraphData
    })

    const graphRef = useRef();

    const dataToggleRef = useRef();

    function handleAnimation (pixels) {
        const animation = { width: `${pixels}px` };
        const animationTiming = {
            duration: 1000,
            iterations: 1,
            fill: 'forwards'
          }
        
          graphRef.current.animate(animation, animationTiming);
    }

    function handleDataShow(e) {
        const target = e.target;

    }

    function createTouchTimer() {
        let timer;
        const touchDuration = 800;

        function touchStart() {
            if(!timer) {
                timer = setTimeout(onLongTouch, touchDuration);
            }
        }

        function touchEnd() {
            if(timer) {
                clearTimeout(timer);
            }
        }

        function onLongTouch() {

        }

        document.addEventListener("DOMContentLoad", function(event) {
            window.addEventListener("touchstart", touchStart, false);
            window.addEventListener("touchend", touchEnd, false);
        })
    }

    useEffect(() => {
        function convertVotes(){
            const votePixels = votes;
            handleAnimation(votePixels);
        }
        
        if(lead){
            graphRef.current.style.backgroundColor="#409d22"
        }
        convertVotes();

        function handleHover() {
            setShowGraphData(!showGraphData);
            console.log("called")
        }

        graphRef.current.addEventListener("mouseover", handleHover);
        graphRef.current.addEventListener("mouseleave", handleHover);

    }, [votes, lead, showGraphData])

    return (
        <div className={styles.graphContainer}>
            <img src={image} alt={name} />
            <div className={styles.graphDataContainer}>
                <div className={styles.graph} ref={graphRef}></div>
                <div className={graphDataClass} ref={dataToggleRef}>
                    <p className={styles.dataText}>{votes} votes</p>
                </div>
            </div>
        </div>
    );
}

export default BarGraph;