function Review(props) {
    return (
    <div>
        <p>{props.reviewObj.customerName}</p>
        <p>{props.reviewObj.reviewDescription}</p>
    </div>
    );
}

export default Review