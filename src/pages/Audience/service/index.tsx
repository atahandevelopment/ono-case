import api from "../../../interceptor";

export const GetAudiences = async () => {
    return await api.get('/simple_audience.php')
}