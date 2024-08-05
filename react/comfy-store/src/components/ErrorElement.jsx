import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
    const routeError = useRouteError();
    console.log(routeError);
    return(
        <>
            <h4 className="font-bold text-4xl">Um erro ocorreu...</h4>
        </>
    );
};

export default ErrorElement;
