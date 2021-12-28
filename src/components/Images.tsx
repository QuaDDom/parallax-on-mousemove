import Img from "./Img";
import './Images.scss'

export default function Images() {
    return (
        <div className="images-container">
            <Img src="./img/img1.jpg" title="Image 1"/>
            <Img src="./img/img2.jpg" title="Image 2"/>
            <Img src="./img/img3.jpg" title="Image 3"/>
        </div>
    )
}
