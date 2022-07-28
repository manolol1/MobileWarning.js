const ua = navigator.userAgent;

console.log("Checking device type...")

if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
    alert("It seems like you are using a mobile device. Please note, that this website doesn't work really good on mobile devices, but you can still try it. If you are not using a mobile device, just ignore this warning.")
    console.warn("Device type checked. Result:Mobile Please note, that this website doesn't work really good on mobile devices, but you can still try it. If you are not using a mobile device, just ignore this warning.")
}else{
    console.log("Device type checked. Result:Desktop")
}

/* To use this script, just add it to your html file. It should automatically check, if the client is a mobile device and warn the user. */