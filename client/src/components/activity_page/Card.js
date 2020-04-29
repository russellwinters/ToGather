import React from 'react'
import AddToCalendar from 'react-add-to-calendar';
export default function Card(props) {
    const {header, description,calendar } = props
    const item = [
      { google: 'Google' },
      { outlook: 'Outlook' },
      { apple: 'Apple Calendar' }
    ]
    return (
        <section className="card card--activity">
            <h3 className = "activity__card-header">{header}</h3>
            <h3 className = "activity__card-description">{description}</h3>
            {
                header === "Details" ? 
                <button className="card__activity--select">Start Now</button> : 
                header === "Share" ?
                <div className = "activity__card-calendar" >
                    <AddToCalendar event = {calendar} listItems={item}/>

                    <span className = "activity__card-link">Share with a link</span>
                </div>
            : ""
            }
        </section>
    )
}
