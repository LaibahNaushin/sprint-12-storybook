import "./Card.css";

export default function Card({
  title = "Product Card",
  description = "A reusable card component for your design system.",
  category = "Design System",
  actionText = "View Details",
  featured = false,
}) {
  return (
    <article className={`ui-card ${featured ? "ui-card--featured" : ""}`}>
      <div className="ui-card__top">
        <span className="ui-card__category">{category}</span>

        {featured && (
          <span className="ui-card__badge">
            Featured
          </span>
        )}
      </div>

      <div className="ui-card__content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <button className="ui-card__action" type="button">
        {actionText}
      </button>
    </article>
  );
}