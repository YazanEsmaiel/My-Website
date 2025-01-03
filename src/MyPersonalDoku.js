import myPersonalDoku1 from './image/ErfahrungCv.jpg'
import myPersonalDoku2 from './image/ErfahrungCv2.jpg'
import myPersonalDoku3 from './image/ErfahrungCv3.jpg'
import myPersonalDoku4 from './image/ErfahrungCv4.jpg'
import './App.css';
import { Navbar } from './Navbar';

export const MyImagecv = () => {
    const imageVariablecv2 = myPersonalDoku2
    const imageVariablecv1 = myPersonalDoku1
    const imageVariablecv3 = myPersonalDoku3
    const imageVariablecv4 = myPersonalDoku4
    return(
        
        <div >
            <Navbar />
            <div className='MainDivImgCv'>
                <h1>My Last Works !</h1>
            </div>
        <div className='Imagescvdiv'>
        <img alt="1" id="yazanImagecv1" src={imageVariablecv1}></img>
        <img alt="2" id="yazanImagecv2" src={imageVariablecv2}></img>
        

        </div>
        <div className='Imagescvdiv2'>
        
        <img alt="3" id="yazanImagecv3" src={imageVariablecv3}></img>
        <img alt="4" id="yazanImagecv4" src={imageVariablecv4}></img>

        </div>
        </div>
            
    )
}