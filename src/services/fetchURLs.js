async function fetchURLs(id) {
    let allDatas = [];
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
    }
    return allDatas;
  }

export { fetchURLs } ;

