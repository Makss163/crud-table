import axios from "axios";

export default async function getAxios( optAxios, funcResponse, funcErr ) {
    await axios(optAxios)
            .then(response => funcResponse(response))
            .catch(error => funcErr(error));
}