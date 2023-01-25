import { Form, useNavigate } from 'react-router-dom';

const Questions = props => {
  const questions = props.questions;
  const navigate = useNavigate();

  const prevPageHandler = () => {
    if (props.curPage !== 1) props.setCurPage(props.curPage - 1);
  };

  const nextPageHandler = () => {
    if (props.curPage !== props.numOfPages) props.setCurPage(props.curPage + 1);
    if (props.curPage === props.numOfPages) navigate('/home/submit');
  };

  return (
    <Form className="ml-6 mt-6">
      <ul>
        {questions.map(que => (
          <li key={que.id} className="mb-3">
            <p className="mb-1.5">
              {que.id}. {que.question}
            </p>
            <ul className="pl-12">
              {que.options.map(opt => (
                <span key={opt.id} className="flex flex-col">
                  <label htmlFor={opt.a + opt.id}>
                    <input
                      type="radio"
                      id={opt.a + opt.id}
                      name={opt.id}
                      value={opt.a}
                      className="mr-1.5"
                    />
                    <span> {opt.a}</span>
                  </label>
                  <label htmlFor={opt.b + opt.id}>
                    <input
                      type="radio"
                      id={opt.b + opt.id}
                      name={opt.id}
                      value={opt.b}
                      className="mr-2.5"
                    />
                    <span>{opt.b}</span>
                  </label>
                  <label htmlFor={opt.c + opt.id}>
                    <input
                      type="radio"
                      id={opt.c + opt.id}
                      name={opt.id}
                      value={opt.c}
                      className="mr-2.5"
                    />
                    <span>{opt.c}</span>
                  </label>
                  <label htmlFor={opt.d + opt.id}>
                    <input
                      type="radio"
                      id={opt.d + opt.id}
                      name={opt.id}
                      value={opt.d}
                      className="mr-2.5"
                    />
                    <span>{opt.d}</span>
                  </label>
                </span>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <div className="flex">
        <button
          disabled={props.curPage === 1}
          onClick={prevPageHandler}
          className={
            props.curPage === 1
              ? 'button-sm__disabled-pri'
              : 'button-sm__active-sec'
          }
        >
          Previous
        </button>
        <button
          onClick={nextPageHandler}
          className="button-sm__active-pri ml-auto"
          type={props.curPage === props.numOfPages ? 'submit' : 'button'}
        >
          {props.curPage === props.numOfPages ? 'Submit' : 'Next'}
        </button>
      </div>
    </Form>
  );
};

export default Questions;
