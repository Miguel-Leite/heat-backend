import axios from "axios";
import { IAccessTokenResponse } from "../interfaces/IAccessTokenResponse";
import { IUserResponse } from "../interfaces/IUserResponse";

class AuthenticateUserService {
    
    async execute(code: string) {
        const url = "https://github.com/login/oauth/access_token";

        const { data: accessTokenResponse } = await axios.post<IAccessTokenResponse>(url,null,{
            params: {
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
                code
            },
            headers: {
                "Accept": "application/json"
            }
        });

        const response = await axios.get<IUserResponse>(`https://api.github.com/user`,{
            headers: {
                authorization: `Bearer ${accessTokenResponse.access_token}`
            },
        })

        return response.data;
    }

}

export { AuthenticateUserService };