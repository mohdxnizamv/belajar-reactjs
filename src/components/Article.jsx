function Article(props) {
  return (
    <>
      <div className="text-gray-400">{props.title}</div>
      <div className="text-gray-400">
        Date : {props.date}, tags: {props.tags.join(", ")}
      </div>
    </>
  );
}

export default Article;
