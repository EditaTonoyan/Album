import { useEffect, useRef, useState } from 'react';

const ImageCard = (props) => {
    const [span, setSpan] = useState(0);

    const inpRef = useRef(null)

    useEffect(() => {
        inpRef.current.addEventListener('load', setSpans);

    }, [])

    const setSpans = () => {
        const height = inpRef.current.clientHeight;
        console.log(height);
        const span = Math.ceil(height / 10);
        setSpan(span)
    }

    return (
        <div >
            <img
                src={props.image.urls.regular}
                alt={props.image.alt_description}
                ref={inpRef}
            />
        </div>
    )
}

export default ImageCard