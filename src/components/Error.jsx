import { useRouteError } from 'react-router-dom';

const Error = () => {

  const error = useRouteError();
  return (
    <div className="error">
      <h1>OOPS!!!!!!!!!!</h1>
      <h2></h2>
      <h1>{error.status} : {error.statusText}</h1>
    </div>
  )
}

export default Error;