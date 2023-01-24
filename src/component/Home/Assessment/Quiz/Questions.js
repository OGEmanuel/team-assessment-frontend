import { useNavigate } from 'react-router-dom';

import classes from './Questions.module.css';

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
    <div className={classes.questions}>
      <ol>
        {questions.map(que => (
          <li key={que.id}>
            <p>
              {que.number}. {que.question}
            </p>
            <ul>
              {que.options.map(opt => (
                <span key={opt.id}>
                  <label htmlFor={opt.a + opt.id}>
                    <input
                      type="radio"
                      id={opt.a + opt.id}
                      name={opt.id}
                      value={opt.a}
                    />
                    <span> {opt.a}</span>
                  </label>
                  <label htmlFor={opt.b + opt.id}>
                    <input
                      type="radio"
                      id={opt.b + opt.id}
                      name={opt.id}
                      value={opt.b}
                    />
                    <span>{opt.b}</span>
                  </label>
                  <label htmlFor={opt.c + opt.id}>
                    <input
                      type="radio"
                      id={opt.c + opt.id}
                      name={opt.id}
                      value={opt.c}
                    />
                    <span>{opt.c}</span>
                  </label>
                  <label htmlFor={opt.d + opt.id}>
                    <input
                      type="radio"
                      id={opt.d + opt.id}
                      name={opt.id}
                      value={opt.d}
                    />
                    <span>{opt.d}</span>
                  </label>
                </span>
              ))}
            </ul>
          </li>
        ))}
      </ol>
      <div className={classes['page-nav']}>
        <button
          className={classes[props.curPage !== 1 ? 'active' : '']}
          disabled={props.curPage === 1}
          onClick={prevPageHandler}
        >
          Previous
        </button>
        <button onClick={nextPageHandler}>
          {props.curPage === props.numOfPages ? 'Submit' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default Questions;
