async function sendLocationDeleteRequest(companyId, locationId) {
    console.log(companyId);
    console.log(locationId);
    const endpoint = `/companies/${companyId}/locations/${locationId}`;
    const response = await fetch(endpoint, {
        method: "DELETE",
    });
    return response;
}
