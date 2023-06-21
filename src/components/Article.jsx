function Article(props) {
  return (
    <>
      <h3 className="font-extrabold text-gray-400">{props.title}</h3>
      <div className="font-extrabold text-gray-400">
        Date : {props.date}, tags: {props.tags.join(", ")}
      </div>
    </>
  );
}

export default Article;
