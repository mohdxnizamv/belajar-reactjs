function Article(props) {
  return (
    <>
      <div>{props.title}</div>
      <div>
        nama pertama : {props.firstName}, nama terakhir: {props.lastName},
      </div>
      <div>
        umur: {props.age}, number: {props.number}
      </div>
      <div>gender: {props.gender}</div>
      {/* <div>
        {props.titles.map((title) => {
          return <div>{title}</div>;
        })}
      </div> */}
    </>
  );
}

export default Article;
