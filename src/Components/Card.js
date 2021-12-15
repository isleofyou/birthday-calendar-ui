const Card = (month) => {
 
console.log(month)
    return (
        <div className="birthday-card">
            <h1 key={month.key}>{`${month.month}`}</h1>
            <div className="each-birthday">
            {month.birthdays.map((birthday) => {
                    return <h3>{`${birthday.name} : ${birthday.month}/${birthday.day}`}</h3>
                })}

            </div>
        </div>
    )
}

export default Card;