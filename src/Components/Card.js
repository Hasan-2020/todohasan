import React from "react";
import "../Styles/style.css";

function Card({ Cards = ["any"] }) {
	return Cards.map((card, i) => {
		if (card !== "any") {
			return (
				<div key={card.header + i} className="card">
					<div className="card-left">
						<div className="card-left-header">{card.header}</div>
						<div className="card-left-text">{card.text}</div>
						<div className="card-left-tag">{card.tag}</div>
					</div>
					<div className="card-right">
						<div className="card-right-image">IMG</div>
						<div className="card-right-date">{card.date}</div>
					</div>
				</div>
			);
		}
		return <div key={card}>Etkinlik Yok</div>;
	});
}
export default Card;
