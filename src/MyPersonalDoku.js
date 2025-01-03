import './App.css';
import { Navbar } from './Navbar';

export const MyImagecv = () => {
    const imageVariablecv2 = `${process.env.PUBLIC_URL}/images/ErfahrungCv2.jpg`;
    const imageVariablecv1 = `${process.env.PUBLIC_URL}/images/ErfahrungCv.jpg`;
    const imageVariablecv3 = `${process.env.PUBLIC_URL}/images/ErfahrungCv3.jpg`;
    const imageVariablecv4 = `${process.env.PUBLIC_URL}/images/ErfahrungCv4.jpg`;

    return(
        <div>
            <Navbar />
            <div className='MainDivImgCv'>
                <h1>My Last Works !</h1>
            </div>
            <div className='Imagescvdiv'>
                <img alt="1" id="yazanImagecv1" src={imageVariablecv1} />
                <img alt="2" id="yazanImagecv2" src={imageVariablecv2} />
            </div>
            <div className='Imagescvdiv2'>
                <img alt="3" id="yazanImagecv3" src={imageVariablecv3} />
                <img alt="4" id="yazanImagecv4" src={imageVariablecv4} />
            </div>
        </div>
    );
}
