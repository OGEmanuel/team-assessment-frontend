const Pagination = props => {
  const pages = [...Array(props.numOfPages + 1).keys()].slice(1);

  return (
    <p className="flex text-center mb-2 justify-center gap-4">
      {pages.map(page => (
        <button
          key={page}
          onClick={() => props.setCurPage(page)}
          className={
            props.curPage === page ? 'page bg-primary-300' : 'page bg-inactive'
          }
        >
          {page}
        </button>
      ))}
    </p>
  );
};

export default Pagination;
