const Card = ({ item: { title, logo } }) => {
  return (
    <div
      className="rounded-lg p-4 text-center text-silver shadow-lg"
      style={{ background: "#1c1c27", width: "150px", height: "150px" }}
    >
      <img
        src={logo}
        alt={title}
        className="mx-auto mb-1 max-w-full h-auto"
        style={{ maxWidth: "100px", maxHeight: "100px" }}
      />
      <p
        className="block font-medium"
        style={{ fontSize: "15px", fontWeight: "500" }}
      >
        {title}
      </p>
    </div>
  );
};

export default Card;
