const dummyApiResponse = {
  showLightAndDarkMode: true,
  showTicTacToe: true,
  showRandomImageGenerator: true,
  showAccordian: false,
  showtreeView: true,
};

function featuredFlagsDataServiceCall() {
  return new Promise((resolve, reject) => {
    if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
    else reject("Some Error Occured!! Please Try Again Later");
  });
}

export default featuredFlagsDataServiceCall;
 