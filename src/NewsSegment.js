const NewsSegment = ({ image, text }) => {
    
    return (
        
        <div> 
            <img src = {image} />
            <h3>{text}</h3>
        </div>
    );
}

export default NewsSegment;

