alert("bienvenido a mi programa para conversion de valores");
alert("puedes convertir pesos dolares euros reales mexicanos yuanes");
function eligeMoneda1()
{
    let tipoDeMoneda= prompt("ingrese que moneda posee");
    while ((tipoDeMoneda!="pesos") && (tipoDeMoneda!="dolares")&&(tipoDeMoneda!="euros")&&(tipoDeMoneda!="reales")&&(tipoDeMoneda!="mexicanos")&&(tipoDeMoneda!="yuanes"))
    {
        tipoDeMoneda=prompt("Ingresa un valor valido pa");
    }
    return tipoDeMoneda;
}
function eligeMoneda2()
{
    let conversion=prompt("¿a que moneda le gustaria convertirlo?");
    while ((conversion!="pesos") && (conversion!="dolares")&&(conversion!="euros")&&(conversion!="reales")&&(conversion!="mexicanos")&&(conversion!="yuanes"))
    {
        conversion=prompt("Ingresa un valor valido pa");
    }
    return conversion;
}
function cantidad()
{
    let cantidad=parseInt(prompt("¿cuanto le gustaria convertir?"));
    return cantidad;
}
function trabajo(tipoDeMoneda,conversion,cantidad)
{
    let totalConversion;
    if (tipoDeMoneda=="pesos")
    {           
        if (conversion=="dolares")
        {
            totalConversion=(cantidad*0.0054);
        }
        else if (conversion=="euros") 
        {
            totalConversion=(cantidad*0.0050);
        }
        else if (conversion=="reales")
        {
            totalConversion=(cantidad*0.027);
        }
        else if (conversion=="mexicanos")
        {
            totalConversion=(cantidad*0.10);
        }
        else if (conversion=="yuanes")
        {
            totalConversion=(cantidad*0.037);
        }
    }
    else if (tipoDeMoneda=="dolares")
    {
        if (conversion=="pesos")
        {
            totalConversion=(cantidad*185.62);
        }
        else if (conversion=="euros") 
        {
            totalConversion=(cantidad*0.92);
        }
        else if (conversion=="reales")
        {
            totalConversion=(cantidad*5.11);
        }
        else if (conversion=="mexicanos")
        {
            totalConversion=(cantidad*18.78);
        }
        else if (conversion=="yuanes")
        {
            totalConversion=(cantidad*6.78);
        }
    }
    else if (tipoDeMoneda=="euros")
    {
        if (conversion=="pesos")
        {
            totalConversion=(cantidad*201.68);
        }
        else if (conversion=="dolares") 
        {
            totalConversion=(cantidad*1.09);
        }
        else if (conversion=="reales")
        {
            totalConversion=(cantidad*5.56);
        }
        else if (conversion=="mexicanos")
        {
            totalConversion=(cantidad*20.40);
        }
        else if (conversion=="yuanes")
        {
            totalConversion=(cantidad*7.38);
        }
    }
    else if(tipoDeMoneda=="reales")
    {
        if (conversion=="pesos")
        {
            totalConversion=(cantidad*36.33);
        }
        else if (conversion=="dolares") 
        {
            totalConversion=(cantidad*0.20);
        }
        else if (conversion=="euros")
        {
            totalConversion=(cantidad*0.18);
        }
        else if (conversion=="mexicanos")
        {
            totalConversion=(cantidad*3.68);
        }
        else if (conversion=="yuanes")
        {
            totalConversion=(cantidad*1.33);
        }
    }
    else if (tipoDeMoneda=="mexicanos")
    {
        if (conversion=="pesos")
        {
            totalConversion=(cantidad*9.89);
        }
        else if (conversion=="dolares") 
        {
            totalConversion=(cantidad*0.053);
        }
        else if (conversion=="euros")
        {
            totalConversion=(cantidad*0.049);
        }
        else if (conversion=="reales")
        {
            totalConversion=(cantidad*0.27);
        }
        else if (conversion=="yuanes")
        {
            totalConversion=(cantidad*0.36);
        }
    }
    else
    {
        if (conversion=="pesos")
        {
            totalConversion=(cantidad*27.35);
        }
        else if (conversion=="dolares") 
        {
            totalConversion=(cantidad*0.15);
        }
        else if (conversion=="euros")
        {
            totalConversion=(cantidad*0.14);
        }
        else if (conversion=="mexicanos")
        {
            totalConversion=(cantidad*2.77);
        }
        else if (conversion=="reales")
        {
            totalConversion=(cantidad*0.75);
        }
    }
    return totalConversion;   
}
function menu()
{
    let respuesta=prompt("¿Le gustaria hacer alguna otra operacion?");
    while (respuesta=="si"||"SI"||"s")
    {
        let moneda1=eligeMoneda1();
        let moneda2=eligeMoneda2();
        let totalDinero=cantidad();
        let totalConversion=trabajo(moneda1,moneda2,totalDinero);    
        alert(`El total es ${totalConversion} ${moneda2}`);
        menu();
    }
    
}
let moneda1=eligeMoneda1();
let moneda2=eligeMoneda2();
let totalDinero=cantidad();
let totalConversion=trabajo(moneda1,moneda2,totalDinero);    
alert(`El total es ${totalConversion} ${moneda2}`);
menu();