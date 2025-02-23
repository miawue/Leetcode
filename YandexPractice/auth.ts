// async function asyncAuth() {
//   try {
//     const result = await new Promise((resolve, reject) => {
//       auth().then(resolve).catch(reject);
//     });
//     return result;
//   } catch (error) {
//     throw error;
//   }
// }


// function auth() {
//   return new Promise((resolve, reject) => {
//     asyncAuth((error, data) => {
//       if (error) {
//         reject(error)
//       } else {
//         resolve(data)
//       }
//     })
//   })
// }
