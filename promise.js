const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try {
  const hasilIxx = await promiseTheaterIXX();
  const hasilVgc = await promiseTheaterVGC();
  const penonton = [...penontonTheaterIXX, ...penontonTheaterVGC];

    const totalEmosiPenonton = groupPenonton.filter(
      (penonton) => penonton.hasil == emosi
    );
    return totalEmosiPenonton.length;
  } 
  catch (err) {
    console.log(err);
  }
};
module.exports = {
  promiseOutput,
};
