function delay(time) {
  return new Promise((resolve, reject) => {
    if (typeof(time) === 'string') {
        console.log()
      reject(new Error("Delay required a valid number"));
    }
    else{
        time *= 1000;
      setTimeout(resolve, time);
    }
  });
}

async function main() {
  await delay(2);
  console.log("saad");
  await delay(2);
  console.log("fareed");
  await delay(2);
  console.log("happy Birthday");
}
main();
