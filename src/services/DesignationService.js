import axios from '../utils/axios'; // Import axios from your axios instance or configure a new instance if needed

// Function to get designations
const getDesignations = async (pages,sizePerPage) => {
  const page = (pages - 1) * sizePerPage;
  const limit = sizePerPage;
  try {
    const response = await axios.get(`/designations/?offset=${page}&limit=${limit}`);
    console.log("DEsignations REquest ", response.data.Data.result);
    return response.data.Data;
  } catch (error) {
    console.error(error);
  }
};

const changeStatus = async (id, status_is_active,status_is_architect_biddesk) => {
console.log("Change Status Request", id, status_is_active);
  const paramas = {
    is_active: status_is_active,
    is_architect_biddesk:status_is_architect_biddesk
  };
  try {
    const response = await axios.put(`/designations/${id}`, paramas);
    console.log("Change Status Response", response);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export { getDesignations,changeStatus };