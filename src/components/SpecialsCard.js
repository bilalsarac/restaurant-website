import React from 'react'
import "../components/styles/SpecialsCard.css"
import Dessert1 from "../components/assets/salad.jpg"
import Dessert2 from "../components/assets/bruschetta.jpg"
import Dessert3 from "../components/assets/creme.jpg"
import { MdDeliveryDining } from "react-icons/md"
import { NavLink } from 'react-router-dom'

const SpecialsCard = () => {
    const specialMenus = [
        {
            img: Dessert1,
            title: "Greek Salad",
            price: "$12.99",
            description: "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago styled feta cheese, garnished with crunchy garlic, rosemary croutons.",
            orderlink: "Order a delivery"
        },
        {
            img: Dessert2,
            title: "Bruschetta",
            price: "$5.99",
            description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil; made perfect for an evening dinner.",
            orderlink: "Order a delivery"
        },
        {
            img: Dessert3,
            title: "Lemon Dessert",
            price: "$5.00",
            description: "This comes straight from Grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.",
            orderlink: "Order a delivery"
        }
    ]

    const specialMenusItems = specialMenus.map(element => {
            return (
                <div>
                    <div className="special-card-container">
                        <div className="image-container">
                                <img src={element.img} alt="Special dessert" />
                            </div>
                        <div className="special-card-text">
                            <div className="special-card-title">
                                <h3>{element.title}</h3>
                                <h3 className="price-tag">{element.price}</h3>
                            </div>
                            <p>{element.description}</p>
                            <NavLink to="/orderonline">
                                <h4>
                                    {element.orderlink}
                                    { <MdDeliveryDining size={25} style={{ color: "#333333", marginLeft: "1rem",}} /> }
                                </h4>
                            </NavLink>
                        </div>
                    </div>
                </div>
            )
    })


  return (
    <div>
      <div className="special-card">
        {specialMenusItems}
      </div>
    </div>
  )
}

export default SpecialsCard
