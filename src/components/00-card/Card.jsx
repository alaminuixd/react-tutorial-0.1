import React from 'react'
import "./Card.css"
// Card datas
const cardTitle = "Call Family";
const cardContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sequi corporis earum voluptates neque provident dolores ea, deleniti maiores adipisci exercitationem qui sunt soluta nesciunt, debitis consequatur labore illo eius."
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const yearName = date.getFullYear();

function Card(props) {
    const {title, content, date} = props;
  return (
    <div className='card'>
        <h2 className='card-title'>{title}</h2>
        <p className='card-content'>{content}</p>
        <p className='card-footer'>{date}</p>
    </div>
  )
}

export default Card