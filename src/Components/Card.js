const Card = (month, key) => {
    console.log(month)
    return (
        <div className="birthday-card">
            <h1 key={key}>{`${month.month}`}</h1>
        </div>
    )
}

export default Card;