async function sendDeleteRequest(companyId) {
    return await fetch(`/companies/${companyId}`, {
        method: "DELETE",
    });
}

module.exports = { deleteCompany };
