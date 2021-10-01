async function sendDeleteRequest(companyId) {
    const response = await fetch(`/companies/${companyId}`, {
        method: "DELETE",
    });
    return response;
}

module.exports = { deleteCompany };
