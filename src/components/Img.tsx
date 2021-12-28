import './Img.scss'
import Tilt from 'react-parallax-tilt';
interface Props{
    src: string,
    title: string
}

export default function Img({ src, title }: Props) {   
    return (
        <Tilt
        className='tilt'
        tiltReverse
        glareEnable
        >
            <div className="img-container">
                <img src={src} />
                <div className="title">
                    <p>{title}</p>
                </div>
            </div>
        </Tilt>
    )
}
