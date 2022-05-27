import { useLocation, useParams } from "react-router-dom";

function Profile() {

    const params = useParams();

    const location = useLocation();
    return (<>
        <div>
            <h1>Profile id: {params.id}</h1>
            <h1>Profile Name: {location.state.Name}</h1>
            <h1>Profile Email: {location.state.email}</h1>
            <h1>Profile Password: {location.state.password}</h1>
        </div>


    </>)


}

export default Profile;