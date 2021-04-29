import { Link } from 'react-router-dom';
import {
  Msg404,
  NotFnd,
  NotFoundWrapper,
  PageNotFoundWrapper,
  Return,
} from '../styles';

function NotFound() {
  return (
    <>
      <PageNotFoundWrapper>
        <NotFoundWrapper>
          <Msg404>404</Msg404>
          <NotFnd>NOT FOUND</NotFnd>
        </NotFoundWrapper>
        <Link to='/'>
          <Return>Return to Home</Return>
        </Link>
      </PageNotFoundWrapper>
    </>
  );
}

export default NotFound;
