import { useRouteError } from "react-router-dom";

export default function Error() {

  const error = useRouteError();
  console.error(error);

  return (
    <div>
        <p>{error.statusText || error.message}</p>
    </div>
  );

}