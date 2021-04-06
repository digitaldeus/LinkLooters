window.addEventListener('load', function () {
  // connect popup
  if (window.ethereum) {
    ethereum.enable();

    window.ethereum.on("accountsChanged", function () {
      location.reload();
    });
  } else {
    alert("Non-Ethereum browser detected. Please connect to a wallet");
  }
})
