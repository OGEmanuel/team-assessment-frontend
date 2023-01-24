const Pagination = props => {
  const pages = [...Array(props.numOfPages + 1).keys()].slice(1);

  return (
    <div>
      <p>
        {pages.map(page => (
          <button key={page} onClick={() => props.setCurPage(page)}>
            {page}
          </button>
        ))}
      </p>
    </div>
  );
};

export default Pagination;
