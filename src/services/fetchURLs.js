/**
 * <fetch datas from API's endpoints and return them into an array>
 * @param   {number} id <id of user>
 * @return  {array}     <array of data relative to user>
 */
async function fetchURLs(id) {
  let allDatas = [];
  let isError = false;
    try {
      const datas = await Promise.all([
        fetch(`http://localhost:3000/user/${id}`).then((response) => response.json()),
        fetch(`http://localhost:3000/user/${id}/activity`).then((response) => response.json()),
        fetch(`http://localhost:3000/user/${id}/performance`).then((response) => response.json()),
        fetch(`http://localhost:3000/user/${id}/average-sessions`).then((response) => response.json())
      ]);

      for (const data of datas) {
        allDatas.push(data);
      }

    } catch (error) {
      console.log(error);
      isError = true;
    }
  
  const result = isError ? "error" : allDatas;
  return result;
  }

export { fetchURLs } ;

