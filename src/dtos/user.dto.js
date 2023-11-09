export const loginResponseDTO = (data, accessToken, refreshToken) => {
    return {"userId": data.userid, "AccessToken": accessToken};
    // return {"token": data.userid, "name": data.username};
}

export const payloadResponseDTO = (data) => {
    // console.log("DTO", data);
    return {"id": data.id, "name": data.username};
}