alert("bienvenido a mi programa para conversion de valores");
alert("puedes convertir pesos dolares euros reales mexicanos yuanes");
let tipoDeMoneda= prompt("ingrese que moneda posee");
while ((tipoDeMoneda!="pesos") || (tipoDeMoneda!="dolares")||(tipoDeMoneda!="euros")||(tipoDeMoneda!="reales")||(tipoDeMoneda!="mexicanos")||(tipoDeMoneda!="yuanes"))
{
    tipoDeMoneda=prompt("Ingresa un valor valido pa");
}
let conversion=prompt("¿a que moneda le gustaria convertirlo");
while ((conversion!="pesos") || (conversion!="dolares")||(conversion!="euros")||(conversion!="reales")||(conversion!="mexicanos")||(conversion!="yuanes"))
{
    conversion=prompt("Ingresa un valor valido pa");
}
if (tipoDeMoneda==conversion)
{
    alert("esta aplicacion no esta hecha para gente que no puede entender una consigna tan simple");
    alert("no se puede convertir una moneda en su propia moneda");
}
let cantidad=parseInt(prompt(`¿cuantos ${tipoDemoneda} le gustaria convertir?`));
let totalConversion;

switch(tipoDeMoneda)
{
    case 'pesos':
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
    case 'dolares':
    {
        if (conversion=="peso")
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
    case 'euros':
    {
        if (conversion=="peso")
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
    case 'reales':
    {
        if (conversion=="peso")
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
    case 'mexicanos':
    {
        if (conversion=="peso")
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
    case 'yuanes':
    {
        if (conversion=="peso")
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
        
    alert(`El total es ${totalConversion} ${conversion}`);
}