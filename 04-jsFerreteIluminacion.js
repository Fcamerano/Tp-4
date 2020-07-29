/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    let cantlamparitas;
    let marca;
    let preciolamparita;
    let precioBruto;
    let descuento;
    let porcentaje;
    let preciocondescuento;
    let IIBB;


    cantlamparitas = parseInt(document.getElementById("txtIdCantidad").value);
    marca = parseInt(document.getElementById("Marca").value);
    preciolamparita = 35;
    precioBruto = cantlamparitas*35;
    descuento = precioBruto*(porcentaje/100);
    preciocondescuento = precioBruto-descuento;
    IIBB = preciocondescuento*0.1;


    if(cantlamparitas > 5)
    {
        porcentaje = 50;
    }
    else
    {
        if(cantlamparitas == 5)
        {
            if(marca == "ArgentinaLuz")
            {
                porcentaje = 40;
            }
            else
            {
                porcentaje = 30;
            }
        }
        else
        {
            if(cantlamparitas == 4)
            {
                if(marca == "ArgentinaLuz" || "FelipeLamparas")
                {
                    porcentaje = 25;
                }
                else
                {
                    porcentaje = 20;
                }
            }
            else
            {
                if(cantlamparitas == 3)
                {
                    if(marca == "ArgentinaLuz")
                    {
                        porcentaje = 15;
                    }
                    if(marca == "FelipeLamparas")
                    {
                        porcentaje = 10;
                    }
                    else
                    {
                        porcentaje = 5;
                    }
                }
            }
        }
    }

    document.getElementById("txtIdprecioDescuento").value = preciocondescuento;

    /*
    if (preciocondescuento > 120)
    {
        document.getElementById("txtIdprecioDescuento").value = preciocondescuento + IIBB;
        alert("Usted pago " + IIBB + " de IIBB");
    }
    */










/*
    if (lamparitas >= 6)
    {
        preciocondescuento = (lamparitas * preciolamparita)/2;
    }
    else if (lamparitas == 5 && marca == "ArgentinaLuz")
    {
        preciocondescuento = (lamparitas * preciolamparita);
    }
    else if (lamparitas == 5 && marca != "ArgentinaLuz")
    {
        preciocondescuento = (lamparitas * preciolamparita) * 0.7;
    }
    else if (lamparitas == 4 && marca == "ArgentinaLuz" || "FelipeLamparas")
    {
        preciocondescuento = (lamparitas * preciolamparita) * 0.75;
    }
    else if (lamparitas == 4 && marca != "ArgentinaLuz" || "FelipeLamparas")
    {
        preciocondescuento = (lamparitas * preciolamparita) * 0.8;
    }
    else if (lamparitas == 3 && marca == "ArgentinaLuz")
    {
        preciocondescuento = (lamparitas * preciolamparita) * 0.85;
    }
    else if (lamparitas == 3 && marca == "FelipeLamparas")
    {
        preciocondescuento = (lamparitas * preciolamparita) * 0.9;
    }
    else if (lamparitas == 3 && marca != "FelipeLamparas" || "FelipeLamparas")
    {
        preciocondescuento = (lamparitas * preciolamparita) * 0.95;
    }
    
    
    if (condescuento >= 120)
    {
    alert("Usted pago " + IIBB + " de IIBB")
    preciocondescuento = preciocondescuento + IIBB;
    }
}/*