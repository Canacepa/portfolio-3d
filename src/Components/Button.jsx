export const Button = ({ text, className, id }) => {
  const handleClick = (e) => {
    if (!id) return; // no target id — don't try to scroll

    e.preventDefault(); 
    const target = document.getElementById(id); // use the id string

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <a
      href={id ? `#${id}` : undefined} // provide a fallback href for accessibility
      onClick={handleClick}
      className={`${className ?? ""} cta-wrapper`}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
}