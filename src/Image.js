import myImage from './image/yazan.png';
// import './App.css';

export const MyImage = () => {

    const imageVariable = myImage
    return(
        
        
        <div>
        <img id="yazanImage" src={imageVariable}></img>

        </div>
            
    )
}