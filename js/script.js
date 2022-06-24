
var colors = {
    dark: ["#354f52","#111111","#7f5539","#7693db","#2d3142","#0d0808"],
    midDark: ["#52796f","#222222","#b08968","#86aadc","#adacb5","#bf8a8a"],
    midLight: ["#84a98c","#444444","#ddb892","#a7c2e0","#d8d5db","#d9bfbf"],
    light: ["#cad2c5","#666666","#e6ccb2","#e3ecf3","#eae8ff","#f2e4e4"]
}

i = 0;

document.getElementById("color-button").onclick = function (param) {  

    if(i<colors.dark.length - 1){
        i++;
    }else{i = 0;}
    // set root colors
    document.documentElement.style.setProperty('--dark', colors.dark[i]);
    document.documentElement.style.setProperty('--mid-dark', colors.midDark[i]);
    document.documentElement.style.setProperty('--mid-light', colors.midLight[i]);
    document.documentElement.style.setProperty('--light', colors.light[i]);
};
